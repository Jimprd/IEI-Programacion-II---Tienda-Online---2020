import React from "react";
import { Container, Segment } from "semantic-ui-react";
import "pure-react-carousel/dist/react-carousel.es.css";

/**
 * Mis Componentes
 */
import NavBar from "../../header/NavBar";
import ImageCarousel from "../Carousel/ImageCarousel";
// import TopBanner from "./TopBanner";
// import NewArrivals from "./NewArrivals";
// import Steps from "../../footer/Steps";
import Footer from "../../footer/Footer";
import { MasDestacados } from "../Productos/Gallery";

/**
 *  El nombre de un componente siempre debe comenzar con Mayúscula
 *  Es una práctica común nombrar el Fichero.js que los contiene de la misma forma.
 */
export default function Home() {
  return (
    <>
      {/* <TopBanner /> */}
      {/* <NewArrivals /> */}

      <Container fluid>
        <NavBar />
        <Segment attached="bottom">
          <ImageCarousel />
        </Segment>
        <br></br>
      </Container>
      <Container>
        <MasDestacados />
      </Container>

      {/* <Steps /> */}
      <Footer />
    </>
  );
}
