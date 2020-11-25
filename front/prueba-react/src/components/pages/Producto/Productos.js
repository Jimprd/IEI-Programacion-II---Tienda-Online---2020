import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

/**
 * MIS COMPONENTES
 */
import gestorAxios from "../../../config/axios";
import Header from "../../header/Header";


/**
 * Componente Funcional
 */
export default function Productos() {
  /**useState
   * Devuelve una pareja de valores: el estado actual y una función que lo actualiza
   * Declaración de una variable de estado "contador" y una funcion setContador para manipularla.
   * cuando se sale de la función,las variables de estado son conservadas por React
   * El único argumento para el Hook useState() es el estado inicial, no tiene por qué ser un objeto.
   */
  const [contador, setContador] = useState(0);

  /**
   * useEffect
   * Le indicamos a React que el componente tiene que hacer algo después de renderizarse. 
   * React recordará la función que le hemos pasado, y la llamará más tarde para 
   * actualizar el DOM. En este efecto, actualizamos el título del documento, pero también
   * podríamos hacer peticiones de datos o invocar alguna API imperativa.
   */
  // Esta función que pasamos es nuestro efecto. Dentro de nuestro efecto actualizamos el título 
  // del documento usando la API del navegador document.title
  useEffect(() => {
    document.title = `You clicked ${contador} times`;
  });


  /**
   * HOOKS guardar productos
   */
  const [productos, guardarProductos] = useState([]);


  useEffect(() => {
    obtenerProductos();
  }, []);// corchete vacío corta el bucle infinito de useEffect

  const obtenerProductos = () => {
    gestorAxios.get("/producto/").then((res) => {
      guardarProductos(res.data.products);
    });
  }

  const eliminarProducto = (producto) => {
    gestorAxios.delete(`/producto/_id/${producto._id}`).then((res) => {
      console.log("Res DATA", res.data.products);
      obtenerProductos();
    });
  }




  return (
    <div>
      <Header />
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
                cuenta {contador}
                <div className="header">{producto.nombre}</div>
                <div className="meta">$ {producto.precio}</div>
                <div className="description">
                  Descripción parcial del producto
                </div>
              </div>
              <div className="extra content">
                <span>
                  <Link to={`/producto/_id/${producto._id}`}>Ver</Link>
                </span>
                <button onClick={() => setContador(contador + 1)}>Contar</button>
                <button onClick={() => eliminarProducto(producto)}>Boton Eliminar</button>
                {/* <Link to="/dashboard/productos" onClick={""}>Eliminar</Link> */}
              </div>
              <br></br>
              <br></br>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
