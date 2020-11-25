import React from "react";
import { Link } from "react-router-dom";
// import { Button } from "semantic-ui-react";

// creamos un componente funcional o de funcion. La alternativa es una className (ver producto)
export default function Menu() {
  return (
    <>
      <nav>
        <h2>Nav Bar</h2>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li></li>
        </ul>
      </nav>
    </>
  );
}
