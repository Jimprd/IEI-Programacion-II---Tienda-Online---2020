import React, { useEffect, useState } from "react";

import gestorAxios from "../../../config/axios"; // nos sirve para comunicarnos y hacer peticiones al back-end, o bien podríamos usar fetch() y no axios

//MIS COMPONENTES
import Header from "../../header/Header";

export default function Producto(props) {
  const [producto, guardarProducto] = useState([]);
  console.info("Entra a componente Producto (página del producto)");
  useEffect(() => {
    if (producto.length === 0) {
      gestorAxios.get(`/producto/_id/${props.match.params._id}`).then((res) => {
        guardarProducto(res.data.products[0]);
      });
    }
  });

  return (
    <div>
      <Header />
      <h1> PAGINA DEL PRODUCTO </h1>
      <div key={producto._id}>
        <div>
          <ul>
            <li>{producto.nombre}</li>
            <li>{producto.precio}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
