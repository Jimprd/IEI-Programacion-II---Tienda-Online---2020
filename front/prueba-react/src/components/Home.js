import React from "react";
import Menu from "./Menu";

/**
 *  El nombre de un componente siempre debe comenzar con Mayúscula
 *  Es una práctica común nombrar el Fichero.js que los contiene de la misma forma.
 */
export default function Home() {
  return (
    <div>
      <Menu />
      <h1>Mi Homepage </h1>
    </div>
  );
}
