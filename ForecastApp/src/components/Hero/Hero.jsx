import { useEffect, useState, useContext, useRef } from "react";
import { TemaContext } from "../../context/themeContext.jsx";
import { DetailsCards } from "../DetailsCards/DetailsCards.jsx";
import { Button } from "../Button/Button.jsx";
import { Input } from "../Input/Input.jsx";
import { Container } from "../Container/Container.jsx";
import { Message } from "../Message/Message.jsx";

/**
 * @description Componente que muestra el hero de la aplicación
 * @param {number} latitude Latitud de la ubicación
 * @param {number} longitude Longitud de la ubicación
 * @param {Object} err Objeto que contiene el error (default: null)
 * @var {Object} weather Objeto que contiene la información del clima
 * @var {Object} tema Objeto que contiene el tema
 * @var {Object} text Objeto que contiene el texto de la ubicación buscada
 * @var {Object} input Objeto que contiene la referencia del input
 *
 * @return {JSX.Element} El componente GetWeather
 * @author Miguel Ticaray
 */
function Hero({ latitude, longitude, err = null }) {
  const { tema } = useContext(TemaContext);
  const [weather, setWeather] = useState(null);
  const [text, setText] = useState(null);
  const [error, setError] = useState(null);
  const input = useRef(null);

  useEffect(() => {
    if (!latitude || !longitude) return;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${
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
      .then((res) => {
        if (!res.ok){
          throw new setError(`location: ${text} not found`)
        }  return res.json() ;
      })
      .then((data) => setWeather(data))
      .catch((err) => console.log(err));
  }, [text]);

  const reloadLocation = () => {
    window.location.reload();
  };

  if (err) {
    return (
      <Message
        text={err}
        styleMesage="flex items-center justify-center gap-4 text-2xl bg-red-600/40 p-4 rounded-2xl lg:w-1/3"
      >
        <Button
          onClick={reloadLocation}
          style={
            tema === "dark"
              ? "text-xl lg:text-2xl cursor-pointer"
              : "text-xl lg:text-2xl cursor-pointer"
          }
          icon={"fas fa-rotate"}
        />
      </Message>
    );
  }

  const searchCity = () => {
    setText(input.current.value);
    input.current.value = "";
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      searchCity();
    }
  };

  if (error) {
    return (
      <Message
        text={error}
        styleMesage="flex items-center gap-4 justify-center text-2xl bg-red-600/40 p-4 rounded-2xl lg:w-1/3"
      >
        <Button
          onClick={reloadLocation}
          style={
            tema === "dark"
              ? "text-xl lg:text-2xl cursor-pointer"
              : "text-xl lg:text-2xl cursor-pointer"
          }
          icon={"fas fa-rotate"}
        />
      </Message>
    );
  }

  return (
    <Container
      style={
        tema === "dark"
          ? "flex flex-col items-center justify-center gap-5 "
          : "flex flex-col items-center justify-center gap-5 "
      }
    >
      <Container style="flex flex-col items-center justify-center gap-4 w-full">
        <Container style="flex flex-col justify-center gap-2">
            <h2 className="text-2xl  font-semibold text-center">Search a city</h2>
            <p className="text-sm font-semibold text-center">For a more exact search, use the following nomenclature: Barcelona, es or Barcelona, ve</p>
          <Container style="flex items-end justify-center gap-2 w-full ">
            <Input
              placeholder={"Ex: New York, us or New York"}
              onKeyDown={handleKeyDown}
              style={
                "w-full p-2 outline-none border border-blue-900/50 rounded-lg placeholder:text-gray-500 transition-all duration-300 easy-in-out"
              }
              ref={input}
            />
            <Button
              onClick={searchCity}
              icon={
                "fas fa-magnifying-glass lg:group-hover/search:scale-110 transition-all duration-300 easy-in-out"
              }
              style={
                "text-2xl cursor-pointer flex items-center justify-center pb-2 transition-all duration-300 easy-in-out group/search"
              }
            />
          </Container>
        </Container>
        <Button
          onClick={reloadLocation}
          icon={
            "fas fa-location-dot lg:group-hover/mylocation:scale-110 transition-all duration-300 easy-in-out"
          }
          text={"Use my location"}
          style={
            "flex items-center justify-center gap-2 text-sm  cursor-pointer w-full md:w-1/4 lg:w-1/5 p-1 border border-blue-900/50 rounded-lg  transition-all duration-300 easy-in-out group/mylocation"
          }
        />
      </Container>
      <main className="w-full md:w-150 lg:w-200 flex flex-col items-center justify-center gap-5 lg:gap-7 shadow-xl shadow-gray-950/50 rounded-3xl p-8 transition-all duration-300 easy-in-out">
        <Container style="w-full flex items-center justify-around  ">
          <Container style="flex flex-col items-center justify-center gap-5">
            <p className=" text-9xl transition-all duration-300 easy-in-out">
              {weather && weather.main.temp.toFixed(0)}
              <span className="text-4xl"> &#176;C</span>
            </p>
            <Container style="flex items-center justify-center gap-8">
              <Container style="flex justify-center items-center gap-2 ">
                <i className="fas fa-temperature-arrow-up text-red-500"></i>
                <p>
                  Max: {weather && weather.main.temp_max.toFixed(0)}
                  <span className="text-[12px]"> &#176;C</span>
                </p>
              </Container>
              <Container style="flex justify-center items-center gap-2">
                <i className="fas fa-temperature-arrow-down text-blue-500"></i>
                <p>
                  Min: {weather && weather.main.temp_min.toFixed(0)}
                  <span className="text-[12px]"> &#176;C</span>
                </p>
              </Container>
            </Container>
          </Container>
          <Container style="hidden md:flex flex-col items-center justify-center gap-2 transition-all duration-300 easy-in-out">
            {weather && (
              <img
                className={
                  tema === "light"
                    ? "felx items-center justify-center backdrop-blur-2xl bg-zinc-500/50 rounded-lg transition-all duration-300 easy-in-out"
                    : ""
                }
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt="sun icon"
              />
            )}
            <p className="transition-all duration-300 easy-in-out text-2xl font-semibold">
              {weather &&
                weather.weather[0].description.charAt(0).toUpperCase() +
                  weather.weather[0].description.slice(1)}
            </p>
          </Container>
        </Container>
        <h2
          className={
            tema === "dark"
              ? "flex justify-center items-end gap-2 not-last:text-4xl font-bold  transition-all duration-300 easy-in-out"
              : "flex justify-center items-end gap-2 not-last:text-4xl font-bold  transition-all duration-300 easy-in-out"
          }
        >
          {weather && weather.name}
          <span className="text-sm backdrop-blur-2xl bg-zinc-500/50 rounded-lg py-1 px-2">
            {weather && weather.sys.country}
          </span>
        </h2>
        <Container style="w-full flex flex-col md:hidden items-center justify-center transition-all duration-300 easy-in-out">
          <img
            className={
              tema === "light"
                ? "felx items-center justify-center backdrop-blur-2xl bg-zinc-500/50 rounded-lg transition-all duration-300 easy-in-out"
                : ""
            }
            src={
              weather &&
              `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
            }
            alt="sun icon"
          />
          <p className="transition-all duration-300 easy-in-out text-2xl font-semibold">
            {weather &&
              weather.weather[0].description.charAt(0).toUpperCase() +
                weather.weather[0].description.slice(1)}
          </p>
        </Container>
        <Container
          style={
            tema === "dark"
              ? "w-full grid grid-cols-2 justify-items-center content-center gap-5 text-xl transition-all duration-300 easy-in-out "
              : "w-full grid grid-cols-2 justify-items-center content-center gap-5 text-xl  transition-all duration-300 easy-in-out "
          }
        >
          <DetailsCards
            titulo={"Feels like"}
            icono={"fa fa-temperature-three-quarters"}
            info={weather && weather.main.feels_like.toFixed(0) + "°"}
          />
          <DetailsCards
            titulo={"Cloudiness"}
            icono={"fa fa-cloud"}
            info={weather && weather.clouds.all + "%"}
          />
          <DetailsCards
            titulo={"Humidity"}
            icono={"fa fa-tint"}
            info={weather && weather.main.humidity + "%"}
          />
          <DetailsCards
            titulo={"Wind"}
            icono={"fa fa-wind"}
            info={weather && weather.wind.speed + " m/s"}
          />
          <DetailsCards
            titulo={"Visibility"}
            icono={"fa fa-eye"}
            info={weather && weather.visibility / 1000 + " km/h"}
          />
          <DetailsCards
            titulo={"Pressure"}
            icono={"fa fa-gauge"}
            info={weather && weather.main.pressure + " hPa"}
          />
        </Container>
      </main>
    </Container>
  );
}

export { Hero };
