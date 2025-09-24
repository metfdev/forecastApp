/**
 * @description Componente que muestra un botón con un icono y un texto
 * @param {Function} onClick Función que se ejecuta al hacer clic en el botón
 * @param {String} icon Icono del botón
 * @param {String} text Texto del botón (default: "")
 * @param {String} style Estilo del botón
 *
 * @return {JSX.Element} El componente ButtonPrimary
 * @author Miguel Ticaray
 */
function Button({ onClick = null, icon, text="", style }) {
  return (
    <button onClick={() => onClick()} className={style}>
      {icon && <i className={icon}></i>}
      {text}
    </button>
  );
}

export { Button };