import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import gestorAxios from "../../../config/axios";

export default function NewArrivals() {
  return (
    <div>
      <div className="main">
        <div className="container">
          {/* <!-- BEGIN SALE PRODUCT & NEW ARRIVALS --> */}

          <div className="row margin-bottom-40">
            {/* <!-- BEGIN SALE PRODUCT --> */}
            <div className="col-md-12 sale-product">
              <h4>NewArrivals</h4>
              <ItemProducto />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ItemProducto() {
  const [productos, guardarProductos] = useState([]);

  useEffect(() => {
    if (productos.length === 0) {
      gestorAxios.get("/producto/").then((res) => {
        const prod = res.data.products;
        guardarProductos(prod);
      });
    }
  }, [productos]);

  return (
    <>
      <h5>ItemProducto</h5>
      <div className="owl-carousel owl-carousel5">
        {productos.map((producto) => (
          <div key={producto._id}>
            <div className="product-item">
              <div className="pi-img-wrapper">
                <img
                  src="assets/pages/img/products/model1.jpg"
                  className="img-responsive"
                  alt="Berry Lace Dress"
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
      </div>
    </>
  );
}
