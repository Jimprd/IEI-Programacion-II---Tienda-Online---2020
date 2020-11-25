import React, { useState } from "react";
import gestorAxios from "../../../config/axios";
import Swal from "sweetalert2";

//MIS COMPONENTES
import Header from "../../header/Header";


//HOOKs
export default function ProductoNuevo() {
  // este será el productos.map de más abajo
  const [producto, guardarProducto] = useState({
    codigoArticulo: "",
    nombre: "",
    precio: 0,
  });

  // useEffect(() => {});

  const guardarValor = (e) => {
    // console.log(e.target.name, e.target.value);
    // el spread operator (...) es un iterador incorporado desde ES6
    guardarProducto({
      ...producto,
      [e.target.name]: e.target.value,
    });
  };

  const crearProducto = async (e) => {
    e.preventDefault();
    console.info(producto);
    const respuesta = await gestorAxios.post("/producto/", producto);
    console.log("La Respuesta", respuesta);
    if (respuesta.status === 201) {
      Swal.fire(
        respuesta.data.product.nombre,
        respuesta.data.message,
        "success"
      );
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: "<a href>Why do I have this issue?</a>",
      });
    }
  };

  return (
    <>
      <Header />
      <div className="ui container">
        <h1>Ingresar Un Nuevo Producto</h1>
        <div className="column">
          <form className="ui equal width form" onSubmit={crearProducto}>
            <div className="fields">
              <input
                type="text"
                placeholder="Nombre del producto."
                name="nombre"
                onChange={guardarValor}
              ></input>
              <input
                type="text"
                placeholder="Código de artículo."
                name="codigoArticulo"
                onChange={guardarValor}
              ></input>
            </div>
            <div className="fields">
              <textarea
                placeholder="Descripción del producto"
                name="descripcion"
                onChange={guardarValor}
              ></textarea>
            </div>
            <div className="fields">
              <div className="ui labeled input">
                <div className="ui label">
                  <i className="dollar sign icon"></i>
                </div>
                <input
                  type="number"
                  placeholder="0.00"
                  name="precio"
                  onChange={guardarValor}
                ></input>
              </div>
            </div>
            <input
              className="ui toggle button active"
              type="submit"
              value="Ingresar Producto"
            ></input>
          </form>
        </div>
      </div>
    </>
  );
}
