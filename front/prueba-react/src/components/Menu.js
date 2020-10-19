import React from "react";
import { Link } from "react-router-dom";
// import { Button } from "semantic-ui-react";

// creamos un componente funcional o de funcion. La alternativa es una class (ver producto)
export default function Menu() {
  
  
  return (
    <div class="ui container">
    <div class="ui tablet computer only padded grid">
      <div class="ui borderless fluid huge menu">
        <a class="header item">Project Name</a>
        <Link to='/' className="active item">Home</Link> 
        <Link to='/login' className="item">Login</Link>
        <Link to='/productos' class="item">Productos</Link>
        <a class="ui dropdown item">
          Dropdown <i class="dropdown icon"></i>
          <div class="menu">
            <div class="item">Action</div>
            <div class="item">Another action</div>
            <div class="item">Something else here</div>
            <div class="ui divider"></div>
            <div class="header">Navbar header</div>
            <div class="item">Seperated link</div>
            <div class="item">One more seperated link</div>
          </div>
        </a>
        <div class="right menu">
          <a class="active item">Default</a> <a class="item">Static top</a>
          <a class="item">Fixed top</a>
        </div>
      </div>
    </div>
    <div class="ui mobile only padded grid">
      <div class="ui borderless huge fluid menu">
        <a class="header item">Project Name</a>
        <div class="right menu">
          <div class="item">
            <button class="ui icon toggle basic button">
              <i class="content icon"></i>
            </button>
          </div>
        </div>
        <div class="ui vertical borderless fluid menu">
          <a class="active item">Home</a> <a class="item">About</a>
          <a class="item">Contact</a>
          <div class="ui dropdown item">
            Dropdown<i class="dropdown icon"></i>
            <div class="menu">
              <a class="item"> Action </a>
              <a class="item"> Another action </a>
              <a class="item"> Something else here </a>
              <div class="ui divider"></div>
              <div class="header">Navbar header</div>
              <a class="item"> Seperated link </a>
              <a class="item"> One more seperated link </a>
            </div>
          </div>
          <a class="active item">Default</a> <a class="item">Static top</a>
          <a class="item">Fixed top</a>
        </div>
      </div>
    </div>
  </div>
  );
}
