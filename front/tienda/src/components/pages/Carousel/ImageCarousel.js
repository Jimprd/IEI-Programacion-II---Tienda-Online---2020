import React from "react";
import { Container, Divider } from "semantic-ui-react";
import { CarouselProvider, Image, Slide, Slider, ButtonBack, ButtonNext } from "pure-react-carousel";

/**
 * MIS COMPONENTES
 */
import CustomDotGroup from "./CustomDotGroup";
import "./Carousel.css";

const ImageCarousel = () => (
  <Container fluid>
    <CarouselProvider
      naturalSlideWidth={1}
      naturalSlideHeight={1}
      totalSlides={3}
    >
      <Slider >
        <Slide tag="a" index={0} >
          <Image src="https://lorempixel.com/640/480/technics/5" alt="promoción 1" />
        </Slide>
        <Slide tag="a" index={1}>
          <Image src="https://lorempixel.com/640/480/technics/4" alt="promoción 2" />
        </Slide>
        <Slide tag="a" index={2}>
          <Image src="https://lorempixel.com/640/480/technics/3" alt="promoción 3" />
        </Slide>
      </Slider>

      <Divider />
      <CustomDotGroup slides={3} />
    </CarouselProvider>
  </Container>
);

export default ImageCarousel;
