import React from "react";

/**
 * Mis Componentes
 */
// import TopBar from "./TopBar";
// import Menu from "./Menu";
import Navbar from "./NavBar";

// creamos un componente funcional o de funcion. La alternativa es una className (ver Productos_class)
export default function Header() {
  return (
    <>
      <Navbar />
    </>
  );
}
