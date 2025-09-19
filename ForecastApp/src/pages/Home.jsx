import { NavBar } from "../components/NavBar/NavBar";
import { GetWeather } from "./GetWeather";
import { useContext } from "react";
import { TemaContext } from "../context/themeContext";

function Home() {
  const { tema } = useContext(TemaContext);

  return (
    <div
      className={
        tema === "dark"
          ? "flex flex-col gap-8 min-h-screen px-4 lg:px-8 l bg-gradient-to-b from-gray-800 to-gray-900 transition-all duration-500 easy-in-out"
          : "flex flex-col gap-8 min-h-screen px-4 lg:px-8 bg-gradient-to-b from-gray-300 to-gray-100 transition-all duration-500 easy-in-out"
      }
    >
      <NavBar />
      <GetWeather />
    </div>
  );
}

export { Home };
