import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
    <br></br>
      <footer className="Container">
        <div className="ui inverted orange vertical footer segment">
          <div className="ui container">
            <div
              className="ui stackable inverted divided equal height stackable grid"
            >
              <div className="three wide column">
                <h4 className="ui inverted header">About</h4>
                <div className="ui inverted link list">
                  <Link className="item" to="#root">Sitemap</Link>
                  <Link className="item" to="#root">Contact Us</Link>
                  <Link className="item" to="#root">Religious Ceremonies</Link>
                  <Link className="item" to="#root">Gazebo Plans</Link>
                </div>
              </div>
              <div className="three wide column">
                <h4 className="ui inverted header">Services</h4>
                <div className="ui inverted link list">
                  <Link className="item" to="#root">Banana Pre-Order</Link>
                  <Link className="item" to="#root">DNA FAQ</Link>
                  <Link className="item" to="#root">How To Access</Link>
                  <Link className="item" to="#root">Favorite X-Men</Link>
                </div>
              </div>
              <div className="seven wide column">
                <h4 className="ui inverted header">Footer Header</h4>
                <p>
                  Extra space for a call to action inside the footer that could
                  help re-engage users.
              </p>
              </div>
            </div>
          </div>
          <div className="" >
            <br></br>
            <p >
              {/* Desarrollado por: <Link to={"#"}> Joel Imparado</Link> */}
            </p>
          </div>
        </div>
      </footer >
    </>
  );
}

