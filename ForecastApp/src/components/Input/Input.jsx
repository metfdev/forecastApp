/**
 * @description Componente que muestra un input
 * @param { Object } type - Objeto que contiene el tipo de input (default: "text")
 * @param { Object } placeholder - Objeto que contiene el placeholder del input
 * @param { Object } onKeyDown - Objeto que contiene la función que se ejecuta al presionar el enter en el input (default: null)
 * @param { Object } style - Objeto que contiene el estilo del input
 * @param { Object } ref - Objeto que contiene la referencia del input (default: null)
 *
 * @return { JSX.Element } - El componente Input
 * @author Miguel Ticaray
 */
function Input({ type = "text", placeholder, onKeyDown= null, style, ref = null }) {
  return (
    <input
      onKeyDown={(e) => onKeyDown(e)}
      ref={ref}
      className={style}
      placeholder={placeholder}
      type={type}
    />
  );
}

export { Input };
