import { useEffect, useState, useContext } from "react";
import LocationComponent from "../components/LocationComponent/LocationComponent.jsx";
import { TemaContext } from "../context/themeContext.jsx";

function GetWeather() {
  const { tema } = useContext(TemaContext);

  const [weather, setWeather] = useState(null);

  const [location, err] = LocationComponent();

  useEffect(() => {
    if (!location) return;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${
        location?.latitude
      }&lon=${location?.longitude}&units=metric&appid=${
        import.meta.env.VITE_APP_API_KEY
      }`
    )
      .then((res) => res.json())
      .then((data) => setWeather(data))
      .catch((err) => console.log(err));
  }, [location]);

  if (err) {
    return (
      <p className={tema === "dark" ? "text-gray-300" : "text-gray-900"}>
        {err}
      </p>
    );
  }

  return (
    <div className={tema === "dark" ? "text-gray-300 w-full flex flex-col items-center justify-center gap-8" : "text-gray-900 w-full flex flex-col items-center justify-center gap-8"}>
      <div className="flex items-center justify-center gap-2 px-4 w-full ">
        <input
          className={
            tema === "dark"
              ? "w-full md:w-1/3 lg:w-1/5 p-2 outline-none text-gray-300 placeholder:text-gray-500 border border-blue-900/50 rounded-lg  transition-all duration-300 easy-in-out"
              : "w-full md:w-1/3 lg:w-1/5  p-2 outline-none border border-blue-900/50 rounded-lg text-gray-700 placeholder:text-gray-500 transition-all duration-300 easy-in-out "
          }
          placeholder="Search location"
          type="text"
        />
        <button className="text-2xl cursor-pointer">🔍</button>
      </div>
      <div className="flex items-center justify-center gap-12 ">
        <p
          className={
            tema === "dark"
              ? "text-gray-300 text-9xl transition-all duration-300 easy-in-out"
              : "text-gray-900 text-9xl transition-all duration-300 easy-in-out"
          }
        >
          {weather && weather.main.temp.toFixed(0)}
          <span className="text-4xl ml-4">&#176;C</span>
        </p>
        <div className="hidden md:flex flex-col items-center justify-center gap-2">
          {weather && (
            <img
              className="w-15"
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt="sun icon"
            />
          )}
          <p
            className={
              tema === "dark"
                ? "text-gray-300 transition-all duration-300 easy-in-out"
                : "text-gray-900 transition-all duration-300 easy-in-out"
            }
          >
            {weather && weather.weather[0].main}
          </p>
        </div>
      </div>
      <h1
        className={
          tema === "dark"
            ? "text-4xl font-bold text-gray-300 transition-all duration-300 easy-in-out"
            : "text-4xl font-bold text-gray-900 transition-all duration-300 easy-in-out"
        }
      >
        {weather && weather.name}
      </h1>
      <div className="flex md:hidden flex-col items-center justify-center gap-2">
        {weather && (
          <img
            className=""
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="sun icon"
          />
        )}
        <p
          className={
            tema === "dark"
              ? "text-gray-300 transition-all duration-300 easy-in-out"
              : "text-gray-900 transition-all duration-300 easy-in-out"
          }
        >
          {weather && weather.weather[0].main}
        </p>
        <p className="transition-all duration-300 easy-in-out">
          {
            weather &&
            weather.weather[0].description.charAt(0).toUpperCase() +
            weather.weather[0].description.slice(1)
          }
        </p>
      </div>
    </div>
  );
}

export { GetWeather };
