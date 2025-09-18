import { useEffect, useState } from "react";
import LocationComponent from "../components/LocationComponent/LocationComponent.jsx";


function GetWeather() {

  const [weather, setWeather] = useState(null);

  // useEffect(() => {
  //   fetch(`https://api.openweathermap.org/data/2.5/weather?q=Caracas&lang=es&APPID=${import.meta.env.VITE_APP_API_KEY}`)
  //     .then((res) => res.json())
  //     .then((data) => setWeather(data));

  // });
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold underline">{LocationComponent()}</h1>
    </div>
  );
}

export { GetWeather };