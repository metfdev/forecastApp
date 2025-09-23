import { useContext } from "react";
import { TemaContext } from "../../context/themeContext";
import { Container } from "../Container/Container";
import { Button } from "../Button/Button";

function NavBar() {
  const { tema, toggleTema } = useContext(TemaContext);

  return (
    <nav
      className={
        tema === "dark"
          ? "flex justify-between lg:justify-around items-center py-4 transition-all duration-300 easy-in-out"
          : "flex justify-between lg:justify-around items-center py-4 transition-all duration-300 easy-in-out"
      }
    >
      <Container style="flex items-center justify-center gap-3">
        <img
          className="w-12"
          src="./public/img/logo.png"
          alt="forecastApp logo"
        />
        <h1 className="text-3xl lg:text-4xl font-bold transition-all duration-300 easy-in-out">
          ForecastApp
        </h1>
      </Container>
      <Button
        onClick={toggleTema}
        style={
          tema === "dark"
            ? "text-xl lg:text-2xl cursor-pointer p-1 border border-gray-700 rounded-full lg:hover:bg-gray-300 transition-all duration-300 easy-in-out"
            : "text-xl lg:text-2xl cursor-pointer p-1 border border-gray-400 rounded-full lg:hover:bg-gray-800 transition-all duration-300 easy-in-out"
        }
        text={tema === "dark" ? "🌞" : "🌜"}
      />
    </nav>
  );
}

export { NavBar };
