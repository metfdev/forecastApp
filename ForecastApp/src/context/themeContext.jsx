import { createContext, useState } from "react";

const TemaContext = createContext("light");

function TemaProvider({ children }) {
  const defaultTema =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

  const [tema, setTema] = useState(defaultTema);

  const toggleTema = () => {
    setTema((tema) => (tema === "light" ? "dark" : "light"));
  };
  return (
    <TemaContext.Provider value={{ tema, toggleTema }}>
      {children}
    </TemaContext.Provider>
  );
}

export { TemaContext, TemaProvider };
