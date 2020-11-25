import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Container, Header } from 'semantic-ui-react';

// https://react.semantic-ui.com/modules/dropdown/#types-clearable


/**
 * MIS COMPONENTES
 */
import { Proximamente } from "../../Detalles";
import gestorAxios from "../../../config/axios";


/**
 * COMPONENTE PRINCIPAL
 */
export default function ProductoNuevo() {
  document.title = "Nuevo Producto";
  const inicio = {
    codigoArticulo: "",
    nombre: "",
    precio: 0,
    categoria: "",
    descripcion: "",
  }

  const [producto, guardarProducto] = useState(inicio);

  // Capturar entradas del Usuario
  const guardarValor = (e) => {
    guardarProducto({
      ...producto, // el spread operator (...) es un iterador incorporado desde ES6
      [e.target.name]: e.target.value,
    });
  };

  // Alertas
  const crearProducto = async (e) => {
    e.target.reset();
    e.preventDefault();
    const respuesta = await gestorAxios.post("/producto/", producto);
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
        text: "Algo salió mal!",
        footer: "<a href>Why do I have this issue?</a>",
      });
    }
  };


  /**
   * RENDERIZAR
   */
  return (
    <>
      <Proximamente />

      <Container >
        
        <Header as="h1" textAlign="center">Ingresar Un Nuevo Producto</Header>

        <div className="column">
          <form className="ui equal width form" onSubmit={crearProducto}>
            <div className="fields">
              <input
                type="text"
                name="nombre"
                placeholder="Nombre del producto."
                required
                onChange={guardarValor}
              ></input>
              <input
                type="text"
                name="codigoArticulo"
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
                  onChange={guardarValor}
                ></input>
                <input
                  type="number"
                  name="stock"
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
            <div>
              <input
                className="ui toggle button active"
                type="submit"
                value="Ingresar Producto"
              ></input>
            </div>
          </form>
        </div>
      </Container>
    </>
  );
}

/**
 * COMPONENTE CATEGORIAS
 * Traer Categorías de la DB
 */
// function Categorias() {

//   const [categorias, guardarCategorias] = useState([
//     {
//       _id: "",
//       nombre: "",
//       value: 0
//     }
//   ]);

//   const [options, guardarOpciones] = useState([])

//   useEffect(() => {
//     obtenerCategorias()
//   }, []);

//   const obtenerCategorias = () => {
//     gestorAxios.get("/categorias/").then((res) => {
//       guardarCategorias(res.data.categorias)

//     });
//   }

//   console.info("CAT", categorias);


//   guardarOpciones(
//     [categorias.map(categoria => {
//       let valor = 0;
//       return {
//         key: categoria._id,
//         text: categoria.nombre,
//         value: valor++
//       }
//     })
//     ])



//   return (
//     <div>
//       <Dropdown clearable options={options} selection placeholder='Categoría' />
//       <input
//         type="text"
//         placeholder="Categoria"
//         value="Pendiente cargar Categorias"
//         name="categoria"
//         readOnly
//       ></input>
//     </div>
//   )
// }
