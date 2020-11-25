import React from "react";

// Mis Componentes
import Header from "../../header/Header";
import TopBanner from "./TopBanner";
import NewArrivals from "./NewArrivals";

/**
 *  El nombre de un componente siempre debe comenzar con Mayúscula
 *  Es una práctica común nombrar el Fichero.js que los contiene de la misma forma.
 */
export default function Home() {
  return (
    <>
      <Header />
      <TopBanner />
      <NewArrivals />
    </>
  );
}
