import { NavBar } from "../components/NavBar/NavBar";
import { Container } from "../components/Container/Container";
import { Hero } from "../components/Hero/Hero";
import { useContext } from "react";
import { TemaContext } from "../context/themeContext";
import LocationComponent  from "../components/LocationComponent/LocationComponent";


/**
 * @description Componente Home de la aplicación
 * @var {Object} tema Objeto que contiene el tema
 * @var {Object} location Objeto que contiene la ubicación
 * @var {Object} err Objeto que contiene el error
 *
 * @return {JSX.Element} El componente Home de la aplicación
 */
function Home() {
  const { tema } = useContext(TemaContext);
  const [location, err] = LocationComponent();

  return (
    <Container
      style={
        tema === "dark"
          ? "text-gray-300 flex flex-col gap-4 min-h-screen px-4 pb-6 lg:px-0 bg-gradient-to-b from-gray-800 to-gray-900 to-85% transition-all duration-500 easy-in-out"
          : "text-gray-800 flex flex-col gap-4 min-h-screen px-4 pb-6 lg:px-0 bg-gradient-to-b from-gray-100 to-gray-300 to-85% transition-all duration-500 easy-in-out"
      }
    >
      <NavBar />
      <Hero latitude={location?.latitude} longitude={location?.longitude} err={err} />
    </Container>
  );
}

export { Home };
