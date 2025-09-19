import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import { Home } from "./pages/Home";
import { TemaProvider } from "./context/themeContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TemaProvider>
      <Home />
    </TemaProvider>
  </StrictMode>
);
