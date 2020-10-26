import React, { useEffect, useState } from "react";
import gestorAxios from "../config/axios";
import { Link } from "react-router-dom";

//MIS COMPONENTES
import Menu from "./Menu";

//HOOKs
export default function Productos() {
  // este será el productos.map de más abajo
  const [productos, guardarProductos] = useState([]);

  useEffect(() => {
    if (productos.length === 0) {
      gestorAxios.get("/producto/").then((res) => {
        const prod = res.data.products; // todo lo que nos responda o devuelva el back-end viene en 'data'
        guardarProductos(prod);
      });
    }
  }, [productos]); // que cualquier cambio en el estado de productos, que vuelva a renderizar lo del return

  return (
    <div>
      <Menu />

      <h1>Todos Los Productos</h1>
      <div className="ui container">
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
                  alt="Imagen representativa del producto"
                ></img>
              </div>
              <div className="content">
                <div className="header">{producto.nombre}</div>
                <div className="meta">$ {producto.precio}</div>
                <div className="description">
                  Descripcion parcial del producto
                </div>
              </div>
              <div className="extra content">
                <span>
                  <Link to={`/producto/_id/${producto._id}`}>Ver</Link>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
