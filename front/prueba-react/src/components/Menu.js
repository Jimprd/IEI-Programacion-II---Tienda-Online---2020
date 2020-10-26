import React from "react";
import { Link } from "react-router-dom";
// import { Button } from "semantic-ui-react";

// creamos un componente funcional o de funcion. La alternativa es una class (ver producto)
export default function Menu() {
  return (
    <>
      {/* <div className="ui tablet computer only padded grid"> */}
      {/* <div className="ui inverted segment"> */}
      <div className="ui inverted orange borderless fluid menu">
        <Link to="#" className="header item">
          Tienda Online
        </Link>
        <Link to="/" className="active item">
          Home
        </Link>
        <div className="ui dropdown item">
          Productos <i className="dropdown icon"></i>
          <div className="menu inverted orange">
            <div className="item">
              <Link to="/productos" className="item">
                Ver Todos
              </Link>
            </div>
            <div className="item">
              <Link to="/producto-nuevo" className="item">
                Nuevo Producto
              </Link>
            </div>
            <div className="item">Something else here</div>
            <div className="ui divider"></div>
            <div className="header">Navbar header</div>
            <div className="item">Seperated link</div>
            <div className="item">One more seperated link</div>
          </div>
        </div>
        <div className="right item menu">
          <div className="ui icon input">
            <input type="text" placeholder="Buscar..."></input>
            <i className="search icon"></i>
          </div>
        </div>
        <div className="right menu">
          <Link to="#" className="active item">
            Default
          </Link>
          <Link to="#" className="item">
            Static top
          </Link>
          <Link to="/login" className="item">
            Login
          </Link>
        </div>
      </div>
      {/* </div> */}
      {/* MENU MOBILE */}
      <div className="ui mobile only padded grid">
        <div className="ui borderless huge fluid menu">
          <Link to="" className="header item">
            Project Name
          </Link>
          <div className="right menu">
            <div className="item">
              <button className="ui icon toggle basic button">
                <i className="content icon"></i>
              </button>
            </div>
          </div>
          <div className="ui vertical borderless fluid menu">
            <Link to="" className="active item">
              Home
            </Link>
            <Link to="" className="item">
              About
            </Link>
            <Link to="" className="item">
              Contact
            </Link>
            <div className="ui dropdown item">
              Dropdown<i className="dropdown icon"></i>
              <div className="menu">
                <Link to="" className="item">
                  Action
                </Link>
                <Link to="" className="item">
                  Another action
                </Link>
                <Link to="" className="item">
                  Something else here
                </Link>
                <div className="ui divider"></div>
                <div className="header">Navbar header</div>
                <Link to="" className="item">
                  Seperated link
                </Link>
                <Link to="" className="item">
                  One more seperated link
                </Link>
              </div>
            </div>
            <Link to="" className="active item">
              Default
            </Link>
            <Link to="" className="item">
              Static top
            </Link>
            <Link to="" className="item">
              Fixed top
            </Link>
          </div>
        </div>
      </div>
    </>
    
  );
}

