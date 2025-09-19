import { useContext } from "react";
import { TemaContext } from "../../context/themeContext";

function NavBar() {
  const { tema, toggleTema } = useContext(TemaContext);

  return (
    <nav
      className={
        tema === "dark"
          ? "flex justify-between lg:justify-around items-center py-6  text-gray-300 transition-all duration-300 easy-in-out"
          : "flex justify-between lg:justify-around items-center py-6  text-gray-900 transition-all duration-300 easy-in-out"
      }
    >
      <div className="flex items-center justify-center gap-3">
        <img
          className="w-12"
          src="./public/img/logo.png"
          alt="forecastApp logo"
        />
        <h2 className="text-2xl font-bold transition-all duration-300 easy-in-out">
          ForecastApp
        </h2>
      </div>
      <button
        onClick={() => {
          toggleTema();
        }}
        className={
          tema === "dark"
            ? "text-xl lg:text-2xl cursor-pointer p-1 border border-gray-700 rounded-full lg:hover:bg-gray-300 transition-all duration-300 easy-in-out"
            : "text-xl lg:text-2xl cursor-pointer p-1 border border-gray-400 rounded-full lg:hover:bg-gray-800 transition-all duration-300 easy-"
        }
      >
        {tema === "dark" ? "🌞" : "🌛"}
      </button>
    </nav>
  );
}

export { NavBar };
