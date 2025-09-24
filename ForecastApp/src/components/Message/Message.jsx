import { Container } from "../Container/Container";

/**
 * @description Componente que muestra un mensaje de error
 * @param {String} children - Mensaje de error adicional
 * @param {String} text - Texto del Mensaje
 * @param {String} styleMesage - Estilo del mensaje de error
 * @param {String} stylecontrainer - Estilo del contenedor del mensaje de error (default: "flex items-center justify-center")
 *
 * @return {JSX.Element} - El componente MessageError
 * @author Miguel Ticaray
 */
function Message({
  children,
  text,
  styleMesage,
  styleContrainer = "flex items-center justify-center",
}) {
  return (
    <Container style={styleContrainer}>
      <p className={styleMesage}>
        {text}
        {children ? children : null}
      </p>
    </Container>
  );
}

export { Message };
