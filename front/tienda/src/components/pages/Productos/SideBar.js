import React from "react";
import { Link } from "react-router-dom";


export default function SideBarContent() {
  return (
    <>
      {/* <!-- BEGIN SIDEBAR --> */}
      <div className="sidebar col-md-3 col-sm-5">
        <ul className="list-group margin-bottom-25 sidebar-menu">
          <li className="list-group-item clearfix">
            <Link to="shop-product-list.html">
              <i className="fa fa-angle-right"></i> Ladies
            </Link>
          </li>
          <li className="list-group-item clearfix dropdown active">
            <Link to="shop-product-list.html" className="collapsed">
              <i className="fa fa-angle-right"></i>
              Mens
            </Link>
            <ul className="dropdown-menu" style={{ display: "block" }}>
              <li className="list-group-item dropdown clearfix active">
                <Link to="shop-product-list.html" className="collapsed">
                  <i className="fa fa-angle-right"></i> Shoes
                </Link>
                <ul className="dropdown-menu" style={{ display: "block" }}>
                  <li className="list-group-item dropdown clearfix">
                    <Link to="shop-product-list.html">
                      <i className="fa fa-angle-right"></i> Classic
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link to="shop-product-list.html">
                          <i className="fa fa-angle-right"></i> Classic 1
                        </Link>
                      </li>
                      <li>
                        <Link to="shop-product-list.html">
                          <i className="fa fa-angle-right"></i> Classic 2
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="list-group-item dropdown clearfix active">
                    <Link to="shop-product-list.html" className="collapsed">
                      <i className="fa fa-angle-right"></i> Sport
                    </Link>
                    <ul className="dropdown-menu" style={{ display: "block" }}>
                      <li className="active">
                        <Link to="shop-product-list.html">
                          <i className="fa fa-angle-right"></i> Sport 1
                        </Link>
                      </li>
                      <li>
                        <Link to="shop-product-list.html">
                          <i className="fa fa-angle-right"></i> Sport 2
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="shop-product-list.html">
                  <i className="fa fa-angle-right"></i> Trainers
                </Link>
              </li>
              <li>
                <Link to="shop-product-list.html">
                  <i className="fa fa-angle-right"></i> Jeans
                </Link>
              </li>
              <li>
                <Link to="shop-product-list.html">
                  <i className="fa fa-angle-right"></i> Chinos
                </Link>
              </li>
              <li>
                <Link to="shop-product-list.html">
                  <i className="fa fa-angle-right"></i> T-Shirts
                </Link>
              </li>
            </ul>
          </li>
          <li className="list-group-item clearfix">
            <Link to="shop-product-list.html">
              <i className="fa fa-angle-right"></i> Kids
            </Link>
          </li>
          <li className="list-group-item clearfix">
            <Link to="shop-product-list.html">
              <i className="fa fa-angle-right"></i> Accessories
            </Link>
          </li>
          <li className="list-group-item clearfix">
            <Link to="shop-product-list.html">
              <i className="fa fa-angle-right"></i> Sports
            </Link>
          </li>
          <li className="list-group-item clearfix">
            <Link to="shop-product-list.html">
              <i className="fa fa-angle-right"></i> Brands
            </Link>
          </li>
          <li className="list-group-item clearfix">
            <Link to="shop-product-list.html">
              <i className="fa fa-angle-right"></i> Electronics
            </Link>
          </li>
          <li className="list-group-item clearfix">
            <Link to="shop-product-list.html">
              <i className="fa fa-angle-right"></i> Home &amp; Garden
            </Link>
          </li>
          <li className="list-group-item clearfix">
            <Link to="shop-product-list.html">
              <i className="fa fa-angle-right"></i> Custom Link
            </Link>
          </li>
        </ul>

        <div className="sidebar-products clearfix">
          <h2>Bestsellers</h2>
          <div className="item">
            <Link to="shop-item.html">
              <img
                src="assets/pages/img/products/k1.jpg"
                alt="Some Shoes in Animal with Cut Out"
              ></img>
            </Link>
            <h3>
              <Link to="shop-item.html">Some Shoes in Animal with Cut Out</Link>
            </h3>
            <div className="price">$31.00</div>
          </div>
          <div className="item">
            <Link to="shop-item.html">
              <img
                src="assets/pages/img/products/k4.jpg"
                alt="Some Shoes in Animal with Cut Out"
              ></img>
            </Link>
            <h3>
              <Link to="shop-item.html">Some Shoes in Animal with Cut Out</Link>
            </h3>
            <div className="price">$23.00</div>
          </div>
          <div className="item">
            <Link to="shop-item.html">
              <img
                src="assets/pages/img/products/k3.jpg"
                alt="Some Shoes in Animal with Cut Out"
              ></img>
            </Link>
            <h3>
              <Link to="shop-item.html">Some Shoes in Animal with Cut Out</Link>
            </h3>
            <div className="price">$86.00</div>
          </div>
        </div>
      </div>
    </>
  );
}
