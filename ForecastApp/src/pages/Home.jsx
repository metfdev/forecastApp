import { NavBar } from "../components/NavBar/NavBar";
import { GetWeather } from "./GetWeather";
import { useContext } from "react";
import { TemaContext } from "../context/themeContext";
import LocationComponent  from "../components/LocationComponent/LocationComponent";


/**
 * @description Componente principal de la aplicación
 * @var {Object} tema Objeto que contiene el tema
 * @var {Object} location Objeto que contiene la ubicación
 * @var {Object} err Objeto que contiene el error
 * @Hooks useContext - Hook que permite acceder a los contextos
 * @component GetWeather - Componente que obtiene la información del clima
 *
 * @return {JSX.Element} El componente Home de la aplicación
 */
function Home() {
  const { tema } = useContext(TemaContext);
  const [location, err] = LocationComponent();

  return (
    <div
      className={
        tema === "dark"
          ? "flex flex-col gap-4 min-h-screen px-4 py-6 lg:px-8 bg-gradient-to-b from-gray-800 to-gray-900 transition-all duration-500 easy-in-out"
          : "flex flex-col gap-4 min-h-screen px-4 py-6 lg:px-8 bg-gradient-to-b from-gray-300 to-gray-100 transition-all duration-500 easy-in-out"
      }
    >
      <GetWeather latitude={location?.latitude} longitude={location?.longitude} err={err} />
    </div>
  );
}

export { Home };
