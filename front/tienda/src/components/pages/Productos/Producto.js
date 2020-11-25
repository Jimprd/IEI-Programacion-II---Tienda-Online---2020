import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import gestorAxios from "../../../config/axios"; // nos sirve para comunicarnos y hacer peticiones al back-end, o bien podríamos usar fetch() y no axios

//MIS COMPONENTES
import Header from "../../header/Header";
import SideBar from "./SideBar";
import Reviews from "./Reviews";
import MostPopulars from "./MostPopulars";
import Steps from "../../footer/Steps";
import Footer from "../../footer/Footer";

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
    <>
      <Header />

      <div className="main">
        <div className="container">
          {/* PATH */}
          <ul className="breadcrumb">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="#">Store</Link>
            </li>
            <li className="active">Cool green dress with red bell</li>
          </ul>

          {/* <!-- BEGIN SIDEBAR & CONTENT --> */}
          <div className="row margin-bottom-40">
            <SideBar />

            {/* <!-- BEGIN CONTENT --> */}

            <div className="col-md-9 col-sm-7">
              <div className="product-page">
                <div className="row">
                  <div className="col-md-6 col-sm-6">
                    <div key={producto._id} className="product-main-image">
                      <img
                        src="../../assets/pages/img/products/model7.jpg"
                        alt="Cool green dress with red bell"
                        className="img-responsive"
                        data-bigimgsrc="../../assets/pages/img/products/model7.jpg"
                      ></img>
                    </div>
                    <div className="product-other-images">
                      <Link
                        to="../../assets/pages/img/products/model3.jpg"
                        className="fancybox-button"
                        rel="photos-lib"
                      >
                        <img
                          alt="Berry Lace Dress"
                          src="../../assets/pages/img/products/model3.jpg"
                        ></img>
                      </Link>
                      <Link
                        to="../../assets/pages/img/products/model4.jpg"
                        className="fancybox-button"
                        rel="photos-lib"
                      >
                        <img
                          alt="Berry Lace Dress"
                          src="../../assets/pages/img/products/model4.jpg"
                        ></img>
                      </Link>
                      <Link
                        to="../../assets/pages/img/products/model5.jpg"
                        className="fancybox-button"
                        rel="photos-lib"
                      >
                        <img
                          alt="Berry Lace Dress"
                          src="../../assets/pages/img/products/model5.jpg"
                        ></img>
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <h1>{producto.nombre}</h1>
                    <div className="price-availability-block clearfix">
                      <div className="price">
                        <strong>
                          <span>$</span>
                          {producto.precio}
                        </strong>
                        <em>
                          $<span>62.00</span>
                        </em>
                      </div>
                      <div className="availability">
                        Availability: <strong>In Stock</strong>
                      </div>
                    </div>
                    <div className="description">
                      <p>
                        Lorem ipsum dolor ut sit ame dolore adipiscing elit, sed
                        nonumy nibh sed euismod laoreet dolore magna aliquarm
                        erat volutpat Nostrud duis molestie at dolore.
                      </p>
                    </div>
                    <div className="product-page-options">
                      <div className="pull-left">
                        <label className="control-label">Size:</label>
                        <select className="form-control input-sm">
                          <option>L</option>
                          <option>M</option>
                          <option>XL</option>
                        </select>
                      </div>
                      <div className="pull-left">
                        <label className="control-label">Color:</label>
                        <select className="form-control input-sm">
                          <option>Red</option>
                          <option>Blue</option>
                          <option>Black</option>
                        </select>
                      </div>
                    </div>
                    <div className="product-page-cart">
                      <div className="product-quantity">
                        <input
                          id="product-quantity"
                          type="text"
                          value="1"
                          readOnly
                          className="form-control input-sm"
                        ></input>
                      </div>
                      <button className="btn btn-primary" type="submit">
                        Add to cart
                      </button>
                    </div>
                    <div className="review">
                      <input
                        type="range"
                        value="4"
                        readOnly
                        step="0.25"
                        id="backing4"
                      ></input>
                      <div
                        className="rateit"
                        data-rateit-backingfld="#backing4"
                        data-rateit-resetable="false"
                        data-rateit-ispreset="true"
                        data-rateit-min="0"
                        data-rateit-max="5"
                      ></div>
                      <Link to="#">7 reviews</Link>
                      &nbsp;&nbsp;|&nbsp;&nbsp;
                      <Link to="#">Write a review</Link>
                    </div>
                    <ul className="social-icons">
                      <li>
                        <Link
                          className="facebook"
                          data-original-title="facebook"
                          to="#"
                        ></Link>
                      </li>
                      <li>
                        <Link
                          className="twitter"
                          data-original-title="twitter"
                          to="#"
                        ></Link>
                      </li>
                      <li>
                        <Link
                          className="googleplus"
                          data-original-title="googleplus"
                          to="#"
                        ></Link>
                      </li>
                      <li>
                        <Link
                          className="evernote"
                          data-original-title="evernote"
                          to="#"
                        ></Link>
                      </li>
                      <li>
                        <Link
                          className="tumblr"
                          data-original-title="tumblr"
                          to="#"
                        ></Link>
                      </li>
                    </ul>
                  </div>

                  <div className="product-page-content">
                    <ul id="myTab" className="nav nav-tabs">
                      <li>
                        <Link to="#Description" data-toggle="tab">
                          Description
                        </Link>
                      </li>
                      <li>
                        <Link to="#Information" data-toggle="tab">
                          Information
                        </Link>
                      </li>
                      <li className="active">
                        <Link to="#Reviews" data-toggle="tab">
                          Reviews (2)
                        </Link>
                      </li>
                    </ul>
                    <div id="myTabContent" className="tab-content">
                      <div className="tab-pane fade" id="Description">
                        <p>{}</p>
                      </div>
                      <div className="tab-pane fade" id="Information">
                        <table className="datasheet">
                          <thead>
                            <tr>
                              <th colSpan="2">Additional features</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="datasheet-features-type">
                                Value 1
                              </td>
                              <td>21 cm</td>
                            </tr>
                            <tr>
                              <td className="datasheet-features-type">
                                Value 2
                              </td>
                              <td>700 gr.</td>
                            </tr>
                            <tr>
                              <td className="datasheet-features-type">
                                Value 3
                              </td>
                              <td>10 person</td>
                            </tr>
                            <tr>
                              <td className="datasheet-features-type">
                                Value 4
                              </td>
                              <td>14 cm</td>
                            </tr>
                            <tr>
                              <td className="datasheet-features-type">
                                Value 5
                              </td>
                              <td>plastic</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="tab-pane fade in active" id="Reviews">
                        <Reviews />
                      </div>
                    </div>
                  </div>
                  <div className="sticker sticker-sale"></div>
                </div>
              </div>
            </div>
            {/* <!-- END CONTENT --> */}
          </div>
          <MostPopulars />
        </div>
        {/* <!-- BEGIN STEPS --> */}
        <Steps />
        {/* <!-- END STEPS --> */}
      </div>
      {/* FOOTER */}
      <Footer />
    </>
  );
}
