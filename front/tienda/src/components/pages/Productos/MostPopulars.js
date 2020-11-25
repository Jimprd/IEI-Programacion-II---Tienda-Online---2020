import React from "react";
import { Link } from "react-router-dom";
// import axios from "axios";

export default function MostPopulars() {
  return (
    <>
      {/* <!-- BEGIN SIMILAR PRODUCTS --> */}
      <div className="row margin-bottom-40">
        <div className="col-md-12 col-sm-12">
          <h2>Most popular products</h2>
          <div className="owl-carousel owl-carousel4">
            <div>
              <div className="product-item">
                <div className="pi-img-wrapper">
                  <img
                    src="../../assets/pages/img/products/k1.jpg"
                    className="img-responsive"
                    alt="Berry Lace Dress"
                  ></img>
                  <div>
                    <Link
                      to="../../assets/pages/img/products/k1.jpg"
                      className="btn btn-default fancybox-button"
                    >
                      Zoom
                    </Link>
                    <Link
                      to="#product-pop-up"
                      className="btn btn-default fancybox-fast-view"
                    >
                      View
                    </Link>
                  </div>
                </div>
                <h3>
                  <Link to="shop-item.html">Berry Lace Dress</Link>
                </h3>
                <div className="pi-price">$29.00</div>
                <Link to={"#"} className="btn btn-default add2cart">
                  Add to cart
                </Link>
                <div className="sticker sticker-new"></div>
              </div>
            </div>
            <div>
              <div className="product-item">
                <div className="pi-img-wrapper">
                  <img
                    src="../../assets/pages/img/products/k2.jpg"
                    className="img-responsive"
                    alt="Berry Lace Dress"
                  ></img>
                  <div>
                    <Link
                      to={"../../assets/pages/img/products/k2.jpg"}
                      className="btn btn-default fancybox-button"
                    >
                      Zoom
                    </Link>
                    <Link
                      to="product-pop-up"
                      className="btn btn-default fancybox-fast-view"
                    >
                      View
                    </Link>
                  </div>
                </div>
                <h3>
                  <Link to={"shop-item.html"}>Berry Lace Dress2</Link>
                </h3>
                <div className="pi-price">$29.00</div>
                <Link to={"#"} className="btn btn-default add2cart">
                  Add to cart
                </Link>
              </div>
            </div>
            <div>
              <div className="product-item">
                <div className="pi-img-wrapper">
                  <img
                    src="../../assets/pages/img/products/k3.jpg"
                    className="img-responsive"
                    alt="Berry Lace Dress"
                  ></img>
                  <div>
                    <Link
                      to={"../../assets/pages/img/products/k3.jpg"}
                      className="btn btn-default fancybox-button"
                    >
                      Zoom
                    </Link>
                    <Link
                      to={"#product-pop-up"}
                      className="btn btn-default fancybox-fast-view"
                    >
                      View
                    </Link>
                  </div>
                </div>
                <h3>
                  <Link to={"shop-item.html"}>Berry Lace Dress3</Link>
                </h3>
                <div className="pi-price">$29.00</div>
                <Link to={"#"} className="btn btn-default add2cart">
                  Add to cart
                </Link>
              </div>
            </div>
            <div>
              <div className="product-item">
                <div className="pi-img-wrapper">
                  <img
                    src="../../assets/pages/img/products/k4.jpg"
                    className="img-responsive"
                    alt="Berry Lace Dress"
                  ></img>
                  <div>
                    <Link
                      to={"../../assets/pages/img/products/k4.jpg"}
                      className="btn btn-default fancybox-button"
                    >
                      Zoom
                    </Link>
                    <Link
                      to={"#product-pop-up"}
                      className="btn btn-default fancybox-fast-view"
                    >
                      View
                    </Link>
                  </div>
                </div>
                <h3>
                  <Link to={"shop-item.html"}>Berry Lace Dress4</Link>
                </h3>
                <div className="pi-price">$29.00</div>
                <Link to={"#"} className="btn btn-default add2cart">
                  Add to cart
                </Link>
                <div className="sticker sticker-sale"></div>
              </div>
            </div>
            <div>
              <div className="product-item">
                <div className="pi-img-wrapper">
                  <img
                    src="../../assets/pages/img/products/k1.jpg"
                    className="img-responsive"
                    alt="Berry Lace Dress"
                  ></img>
                  <div>
                    <Link
                      to={"../../assets/pages/img/products/k1.jpg"}
                      className="btn btn-default fancybox-button"
                    >
                      Zoom
                    </Link>
                    <Link
                      to={"#product-pop-up"}
                      className="btn btn-default fancybox-fast-view"
                    >
                      View
                    </Link>
                  </div>
                </div>
                <h3>
                  <Link to="shop-item.html">Berry Lace Dress5</Link>
                </h3>
                <div className="pi-price">$29.00</div>
                <Link to={"#"} className="btn btn-default add2cart">
                  Add to cart
                </Link>
              </div>
            </div>
            <div>
              <div className="product-item">
                <div className="pi-img-wrapper">
                  <img
                    src="../../assets/pages/img/products/k2.jpg"
                    className="img-responsive"
                    alt="Berry Lace Dress"
                  ></img>
                  <div>
                    <Link
                      to={"../../assets/pages/img/products/k2.jpg"}
                      className="btn btn-default fancybox-button"
                    >
                      Zoom
                    </Link>
                    <Link
                      to={"#product-pop-up"}
                      className="btn btn-default fancybox-fast-view"
                    >
                      View
                    </Link>
                  </div>
                </div>
                <h3>
                  <Link to={"shop-item.html"}>Berry Lace Dress6</Link>
                </h3>
                <div className="pi-price">$29.00</div>
                <Link to={"#"} className="btn btn-default add2cart">
                  Add to cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- END SIMILAR PRODUCTS --> */}
    </>
  );
}
