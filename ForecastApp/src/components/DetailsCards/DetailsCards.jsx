import { useContext } from "react";
import { TemaContext } from "../../context/themeContext";

/**
 * @description Componente que muestra las tarjetas de información
 * @var {Object} tema - Objeto que contiene el tema (dark o light)
 * @param {Object} titulo - Objeto que contiene el título de la tarjeta
 * @param {Object} icono - Objeto que contiene el icono de la tarjeta
 * @param {Object} info - Objeto que contiene la información de la tarjeta
 * @param {Object} style - Objeto que contiene el estilo de la tarjeta (default: "w-full flex flex-col items-start justify-center gap-1 p-4 backdrop-blur-2xl rounded-3xl")
 *
 * @return {JSX.Element} - El componente DetailsCards
 * @author Miguel Ticaray
 */
function DetailsCards({
  titulo,
  icono,
  info,
  style = "w-full flex flex-col items-start justify-center gap-1 p-4 backdrop-blur-2xl rounded-3xl",
}) {

  const { tema } = useContext(TemaContext);

  return (
    <div className={tema === "dark" ? style + " bg-white/10" : style + " bg-black/10"}>
      <div className="flex items-center justify-left text-sm gap-2">
        <i className={icono}></i>
        <p>{titulo}</p>
      </div>
      <p className="text-3xl font-bold">{info}</p>
    </div>
  );
}

export { DetailsCards };