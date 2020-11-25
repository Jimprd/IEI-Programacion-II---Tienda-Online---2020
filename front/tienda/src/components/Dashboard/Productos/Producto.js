import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Header } from "semantic-ui-react";
import Swal from "sweetalert2";

/**
 * MIS COMPONENTES
 */
import { Proximamente } from "../../Detalles";
import gestorAxios from "../../../config/axios";

/**
 * COMPONENTE DEFAULT
 */
export default function Producto(props) {
  document.title = "Actualizar Producto";

  console.log("Propssss", props);
  console.log("Propssss", props.location.search);

  const [producto, guardarProducto] = useState([]);

  // Capturar entradas del Usuario
  const guardarValor = (e) => {
    guardarProducto({
      ...producto, // el spread operator (...) es un iterador incorporado desde ES6
      [e.target.name]: e.target.value,
    });
  };

  /**
   * USE EFFECT
   */
  useEffect(() => {
    if (producto.length === 0) {
      gestorAxios.get(`/producto/_id/${props.match.params._id}`).then((res) => {
        guardarProducto(res.data.products[0]);
        console.log("IMPRIME Axios GET", res.data.products[0]);
      });
    }
  });

  /**
   * PUT
   */
  const actualizarProducto = async (e) => {
    e.target.reset();
    e.preventDefault();
    console.log("pre PUT producto", producto);
    const respuesta = await gestorAxios.put(
      `/producto/_id/${producto._id}`,
      producto
    );
    if (respuesta.status === 200) {
      console.log("RES", respuesta.data);
      Swal.fire(
        respuesta.data.product.nombre,
        respuesta.data.message,
        "success"
      );
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Algo salió mal!",
        footer: "<a href>Why do I have this issue?</a>",
      });
    }
  };

  return (
    <div>
      <Proximamente />

      <Container>
        <Header as="h1" textAlign="center">
          Actualizar Producto
        </Header>

        <div className="column">
          <form className="ui equal width form" onSubmit={actualizarProducto}>
            <div className="fields">
              <input
                type="text"
                name="nombre"
                placeholder="Nombre del producto."
                value={producto.nombre}
                required
                onChange={guardarValor}
              ></input>
              <input
                type="text"
                name="codigoArticulo"
                value={producto.codigoArticulo}
                placeholder="Código de artículo."
                onChange={guardarValor}
              ></input>
            </div>

            <div className="fields">
              <div className="ui labeled input">
                <div className="ui label">
                  <i className="dollar sign icon"></i>
                </div>
                <input
                  type="number"
                  name="precio"
                  placeholder="0.00"
                  required
                  value={producto.precio}
                  onChange={guardarValor}
                ></input>
                <input
                  type="number"
                  name="stock"
                  value={producto.stock}
                  placeholder="0"
                  required
                  onChange={guardarValor}
                ></input>
              </div>
            </div>

            {/* PENDIENTE RESOLVER CATEGORIAS: problemas con el array */}
            {/* <Categorias /> */}

            <div>
              <input
                type="text"
                name="categoria"
                placeholder="Categoria"
                value={producto.categoria}
                onChange={guardarValor}
              ></input>
            </div>
            <div className="fields">
              <textarea
                placeholder="Descripción del producto"
                name="descripcion"
                value={producto.descripcion}
                onChange={guardarValor}
              ></textarea>
            </div>
            <div>
              <input
                className="ui toggle button active"
                type="submit"
                // disabled={props.btn}
                value="Guardar Cambios"
              ></input>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}
