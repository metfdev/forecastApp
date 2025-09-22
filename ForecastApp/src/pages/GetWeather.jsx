import { useEffect, useState, useContext, useRef } from "react";
import { TemaContext } from "../context/themeContext.jsx";

/**
 * @description Componente que obtiene la información del clima de la ubicación actual
 * @param {number} latitude Latitud de la ubicación
 * @param {number} longitude Longitud de la ubicación
 * @param {Object} err Objeto que contiene el error
 * @var {Object} weather Objeto que contiene la información del clima
 * @var {Object} tema Objeto que contiene el tema
 * @var {Object} text Objeto que contiene el texto de la ubicación buscada
 * @var {Object} input Objeto que contiene el input
 * @Hooks useContext - Hook que permite acceder a los contextos
 * @Hooks useState - Hook que permite manejar el estado
 * @Hooks useEffect - Hook que permite manejar el efecto
 * @context TemaContext - Contexto que permite manejar el tema
 *
 * @return {JSX.Element} El componente GetWeather
 * @author Miguel Ticaray
 */
function GetWeather({ latitude, longitude, err=null }) {
  const { tema } = useContext(TemaContext);
  const [weather, setWeather] = useState(null);
  const [text, setText] = useState(null);
  const input = useRef(null);

  useEffect(() => {
    if (!latitude || !longitude) return;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${
        latitude
      }&lon=${longitude}&units=metric&appid=${
        import.meta.env.VITE_APP_API_KEY
      }`
    )
      .then((res) => res.json())
      .then((data) => setWeather(data))
      .catch((err) => console.log(err));
  }, [latitude, longitude]);

  useEffect(() => {
    if (!text) return;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=${
        import.meta.env.VITE_APP_API_KEY
      }`
    )
      .then((res) => res.json())
      .then((data) => setWeather(data))
      .catch((err) => console.log(err));
  }, [text]);

  if (err) {
    return (
      <p className={tema === "dark" ? "text-gray-300" : ""}>
        {err}
      </p>
    );
  }

  const searchCity = () => {
    setText(input.current.value);
    input.current.value = "";
  };

  const reloadLocation = () => {
    window.location.reload();
  };



  return (
    <div
      className={
        tema === "dark"
          ? "text-gray-300 w-full flex flex-col items-center justify-center gap-8 lg:gap-12 pb-5"
          : "text-gray-800 w-full flex flex-col items-center justify-center gap-8 lg:gap-12 pb-5"
      }
    >
      <div className="flex flex-col items-center justify-center gap-4 w-full">
        <div className="flex items-center justify-center gap-2 w-full ">
          <input
            ref={input}
            className="w-full md:w-1/3 lg:w-1/5 p-2 outline-none border border-blue-900/50 rounded-lg placeholder:text-gray-500 transition-all duration-300 easy-in-out "
            placeholder="Search location"
            type="text"
          />
          <button
            onClick={() => searchCity()}
            className="text-2xl cursor-pointer"
          >
            🔍
          </button>
        </div>
        <button
        onClick={() => reloadLocation()}
          className="flex items-center justify-center gap-2 text-sm  cursor-pointer w-full md:w-1/4 lg:w-1/5 p-1 border border-blue-900/50 rounded-lg  transition-all duration-300 easy-in-out group/mylocation">
          <i className="fas fa-location-dot group-hover/mylocation:scale-110 transition-all duration-300 easy-in-out "></i>
          Use my location
        </button>
      </div>
      <div className="flex flex-col items-center justify-center gap-5 lg:gap-12 md:w-150 shadow-2xl shadow-gray-950/50 rounded-3xl p-8 transition-all duration-300 easy-in-out">
        <div className="flex items-center justify-center gap-12 ">
          <div className="flex flex-col items-center justify-center gap-5">
            <p
              className=" text-9xl transition-all duration-300 easy-in-out">
              {weather && weather.main.temp.toFixed(0)}
              <span className="text-4xl"> &#176;C</span>
            </p>
            <div className="flex items-center justify-center gap-8">
              <div className="flex justify-center items-center gap-2 ">
                <i className="fas fa-temperature-arrow-up text-red-500"></i>
                <p>
                  Max: {weather && weather.main.temp_max.toFixed(0)}
                  <span className="text-[12px]"> &#176;C</span>
                </p>
              </div>
              <div className="flex justify-center items-center gap-2">
                <i className="fas fa-temperature-arrow-down text-blue-500"></i>
                <p>
                  Min: {weather && weather.main.temp_min.toFixed(0)}
                  <span className="text-[12px]"> &#176;C</span>
                </p>
              </div>
            </div>
          </div>
          <div className="hidden md:flex flex-col items-center justify-center gap-2 transition-all duration-300 easy-in-out">
            {weather && (
              <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt="sun icon"
              />
            )}
            <p className="transition-all duration-300 easy-in-out text-2xl font-semibold">
              {weather &&
                weather.weather[0].description.charAt(0).toUpperCase() +
                  weather.weather[0].description.slice(1)}
            </p>
          </div>
        </div>
        <h1
          className={
            tema === "dark"
              ? "text-4xl font-bold transition-all duration-300 easy-in-out"
              : "text-4xl font-bold transition-all duration-300 easy-in-out"
          }
        >
          {weather && weather.name}
        </h1>
        <div className="w-full flex flex-col md:hidden items-center justify-center transition-all duration-300 easy-in-out">
          {weather && (
            <img
              className=""
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt="sun icon"
            />
          )}
          <p className="transition-all duration-300 easy-in-out text-2xl font-semibold">
            {weather &&
              weather.weather[0].description.charAt(0).toUpperCase() +
                weather.weather[0].description.slice(1)}
          </p>
        </div>
        <div
          className={
            tema === "dark"
              ? "grid grid-cols-2 justify-items-center content-center gap-5 text-xl transition-all duration-300 easy-in-out "
              : "grid grid-cols-2 justify-items-center content-center gap-5 text-xl  transition-all duration-300 easy-in-out "
          }
        >
          <div className="flex items-center justify-center gap-2 pb-2 border-b border-b-zinc-500/80">
            <i className="fa fa-cloud"></i>
            <p className="">Cloudiness: {weather && weather.clouds.all} %</p>
          </div>
          <div className="flex items-center justify-center gap-2 pb-2 border-b border-b-zinc-500/80">
            <i className="fa fa-eye"></i>
            <p className="">
              Visibility: {weather && weather.visibility / 1000} km/h
            </p>
          </div>
          <div className="flex items-center justify-center gap-2 pb-2 border-b border-b-zinc-500/80">
            <i className="fa fa-temperature-three-quarters"></i>
            <p>
              Feels like: {weather && weather.main.feels_like.toFixed(0)}
              °
            </p>
          </div>
          <div className="flex items-center justify-center gap-2 pb-2 border-b border-b-zinc-500/80">
            <i className="fa fa-tint"></i>
            <p>Humidity: {weather && weather.main.humidity} %</p>
          </div>
          <div className="flex items-center justify-center gap-2 pb-2 border-b border-b-zinc-500/80">
            <i className="fa fa-wind"></i>
            <p>Wind: {weather && weather.wind.speed} m/s</p>
          </div>
          <div className="flex items-center justify-center gap-2 pb-2 border-b border-b-zinc-500/80">
            <i className="fa fa-gauge"></i>
            <p>Pressure: {weather && weather.main.pressure} hPa</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { GetWeather };
