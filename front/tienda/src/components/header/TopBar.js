import React from "react";
import { Link } from "react-router-dom";

export default function Slider() {
  return (
    <>
      {/* <!-- BEGIN TOP BAR --> */}
      <div className="pre-header">
        <div className="container">
          <div className="row">
            {/* <!-- BEGIN TOP BAR LEFT PART --> */}
            <div className="col-md-6 col-sm-6 additional-shop-info">
              <ul className="list-unstyled list-inline">
                <li>
                  <i className="fa fa-phone"></i>
                  <span>+1 456 6717</span>
                </li>
                {/* <!-- BEGIN CURRENCIES --> */}
                <li className="shop-currencies">
                  <Link to="#">€</Link>
                  <Link to="#">£</Link>
                  <Link to="#" className="current">
                    $
                  </Link>
                </li>
                {/* <!-- END CURRENCIES --> */}
                {/* <!-- BEGIN LANGS --> */}
                <li className="langs-block">
                  <Link to="#" className="current">
                    English
                  </Link>
                  <div className="langs-block-others-wrapper">
                    <div className="langs-block-others">
                      <Link to="#">French</Link>
                      <Link to="#">Germany</Link>
                      <Link to="#">Turkish</Link>
                    </div>
                  </div>
                </li>
                {/* <!-- END LANGS --> */}
              </ul>
            </div>
            {/* <!-- END TOP BAR LEFT PART --> */}
            {/* <!-- BEGIN TOP BAR MENU --> */}
            <div className="col-md-6 col-sm-6 additional-nav">
              <ul className="list-unstyled list-inline pull-right">
                {/* <li>
                  <Link to="shop-account.html">My Account</Link>
                </li>
                <li>
                  <Link to="shop-wishlist.html">My Wishlist</Link>
                </li> */}
                <li>
                  <Link to="/registrate">Registrate</Link>
                </li>
                <li>
                  <Link to="/login">Log In</Link>
                </li>
              </ul>
            </div>
            {/* <!-- END TOP BAR MENU --> */}
          </div>
        </div>
      </div>
      {/* <!-- END TOP BAR --> */}
    </>
  );
}
