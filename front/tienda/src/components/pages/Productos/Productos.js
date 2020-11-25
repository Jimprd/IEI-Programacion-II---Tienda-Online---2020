import React from "react";
import { Container } from 'semantic-ui-react';

/**
 * Mis Componentes
 */
import NavBar from "../../header/NavBar";
import Gallery from "./Gallery";
import Footer from "../../footer/Footer";
/**
 * Componente Default
 */
export default function Productos() {

    return (
        <>
            <NavBar />

            <br></br>
            <br></br>
            <main>
                <Container>
                    <Gallery />
                </Container>
            </main>
            <Footer/>
        </>
    )
}