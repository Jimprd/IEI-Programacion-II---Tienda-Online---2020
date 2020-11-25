import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { Message } from 'semantic-ui-react'; // Acá Va BootStrap por CDN en index
// import Swal from "sweetalert2"

/**
 * MIS COMPONENTES
 */
import gestorAxios from "../../../config/axios";


export default function NewArrivals() {
  return (
    <>
      <div className="main">
        <div className="container">
          <div className="row margin-bottom-40">
            <div className="col-md-12 sale-product">
              <h2>New Arrivals</h2>
              <ItemProducto />
              <div className="owl-carousel owl-carousel5">

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/**
 * ITEM PRODUCTO
 * No se grafica cuando entra al carrousel... problema con jquery o bootstrap.js
 */
function ItemProducto() {
  const [productos, guardarProductos] = useState([]);
  console.log("Entra Item")

  useEffect(() => {
    if (productos.length === 0) {
      gestorAxios.get("/producto/").then(
        (res) => {
          if (res.data.products === undefined) {
            guardarProductos({ message: "No se encontraron productos." });
          } else {
            guardarProductos(res.data.products); // todo lo que nos responda o devuelva el back-end viene en 'res.data'
          }
        }
      );
    }
  });


  if (productos.message) {
    return (
      <>
        <div className="alert alert-warning" role="alert">
          Parece que de momento no hay productos que mostrar aquí...
      </div>
      </>)
  } else
    if (productos.length === 0) {

      return (

        <>Cargando... </>

      );
    } else {
      return (
        <>
          <h1>ITEM PRODUCTO</h1>
          {productos.map((producto) => (
            <div key={producto._id}>
              <div className="product-item">
                <div className="pi-img-wrapper">
                  <img
                    src="assets/pages/img/products/model1.jpg"
                    className="img-responsive"
                    alt={producto.nombre}
                  ></img>
                  <div>
                    <Link
                      to="assets/pages/img/products/model1.jpg"
                      className="btn btn-default fancybox-button"
                    >
                      Zoom
                  </Link>
                    <Link
                      to={`/producto/_id/${producto._id}`}
                      className="btn btn-default fancybox-fast-view"
                    >
                      View
                  </Link>
                  </div>
                </div>
                <h3>
                  <Link to="shop-item.html">{producto.nombre}</Link>
                </h3>
                <div className="pi-price">${producto.precio}</div>
                <Link to="#" className="btn btn-default add2cart">
                  Add to cart
              </Link>
                <div className="sticker sticker-sale"></div>
              </div>
            </div>
          ))}
        </>
      );
    }
}


// function Cargando() {
//   let timerInterval;
//   Swal.fire({
//     title: 'Cargando',
//     html: 'I will close in <b></b> milliseconds.',
//     timer: 2000,
//     timerProgressBar: true,
//     willOpen: () => {
//       Swal.showLoading()
//       timerInterval = setInterval(() => {
//         const content = Swal.getContent()
//         if (content) {
//           const b = content.querySelector('b')
//           if (b) {
//             b.textContent = Swal.getTimerLeft()
//           }
//         }
//       }, 100)
//     },
//     onClose: () => {
//       clearInterval(timerInterval)
//     }
//   }).then((result) => {
//     /* Read more about handling dismissals below */
//     if (result.dismiss === Swal.DismissReason.timer) {
//       console.log('I was closed by the timer')
//     }
//   })
// }