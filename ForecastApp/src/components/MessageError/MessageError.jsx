import { Container } from "../Container/Container";

/**
 * @description Componente que muestra un mensaje de error
 * @param {String} children - Mensaje de error adicional
 * @param {String} err - Mensaje de error
 * @param {String} styleMesage - Estilo del mensaje de error
 * @param {String} stylecontrainer - Estilo del contenedor del mensaje de error (default: "flex items-center justify-center")
 *
 * @return {JSX.Element} - El componente MessageError
 * @author Miguel Ticaray
 */
function MessageError({
  children,
  err,
  styleMesage,
  styleContrainer = "flex items-center justify-center",
}) {
  return (
    <Container style={styleContrainer}>
      <p className={styleMesage}>
        {err}
        {children ? children : null}
      </p>
    </Container>
  );
}

export { MessageError };
