import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header, Card } from 'semantic-ui-react';


/**
 * Mis Componentes
 */
import gestorAxios from "../../../config/axios";

/**
 * Componente Default
 */
export default function Gallery() {

    const [productos, guardarProductos] = useState([]);

    useEffect(() => {
        obtenerProductos();
    }, []);// corchete vacío corta el bucle infinito de useEffect


    const obtenerProductos = () => {
        gestorAxios.get("/producto/").then((res) => {
            guardarProductos(res.data.products);
        });
    }


    return (
        <>
            <Card.Group itemsPerRow={4} stackable>
                {productos.map((producto) => (
                    <Card
                        key={producto._id}
                        color='orange'
                        fluid={true}
                        href={`/producto/_id/${producto._id}`}
                        image={"/images/muestra.jpg"}
                        header={producto.nombre}
                        description={"$" + producto.precio}
                    />
                ))}
            </Card.Group>
        </>
    )
}


/**
 * LOS MÁS DESTACADOS
 */
export function MasDestacados() {
    const [productos, guardarProductos] = useState([]);

    useEffect(() => {
        obtenerProductos();
    }, []);// corchete vacío corta el bucle infinito de useEffect


    const obtenerProductos = () => {
        gestorAxios.get("/producto/").then((res) => {
            guardarProductos(res.data.products);
        });
    }
    return (

        <div className="ui container">
            <Header as="h2">Los más destacados</Header>
            <div className="ui four doubling special cards">
                {productos.map((producto) => (
                    <div key={producto._id} className="orange fluid card">
                        <div className="blurring dimmable image">
                            <div className="ui dimmer">
                                <div className="content">
                                    <div className="center">
                                        <div className="ui inverted button">Add to card</div>
                                    </div>
                                </div>
                            </div>
                            <img
                                className="ui fluid image"
                                src="/images/muestra.jpg"
                                alt={`Imagen de ${producto.nombre}`}
                            ></img>
                        </div>
                        <div className="content">

                            <div className="header">{producto.nombre}</div>
                            <div className="meta">$ {producto.precio}</div>
                            <div className="description">
                                Descripción parcial del producto
                        </div>
                        </div>
                        <div className="extra content">
                            <span color="orange">
                                <Link to={`/producto/_id/${producto._id}`} >Ver</Link>
                            </span>
                        </div>
                        <br></br>
                        <br></br>
                    </div>
                ))}
            </div>
        </div>
    )
}