/**
 * @description Componente que muestra un contenedor
 * @param {Object} children - Objeto que contiene los hijos del contenedor
 * @param {Object} style - Objeto que contiene el estilo del contenedor
 *
 * @return {JSX.Element} - El componente Container
 * @author Miguel Ticaray
 */
function Container({ children, style }) {
  return <div className={style}>{children}</div>;
}

export { Container };
