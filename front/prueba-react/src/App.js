import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// https://medium.com/@simonhoyos/enrutando-en-react-cd9e4ad6e3d3

//IMPORTANDO MIS COMPONENTES
import Home from "./components/pages/Home/Home";
import Productos from "./components/pages/Producto/Productos";
import Producto from "./components/pages/Producto/Producto";
import ProductoNuevo from "./components/pages/Producto/Producto_nuevo";
import Login from "./components/Login";

/**
 * Declaración de un COMPONENTE funcional (function)
 */
export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/productos" component={Productos} exact></Route>

        <Route path="/producto-nuevo" component={ProductoNuevo} exact></Route>

        <Route path="/producto/_id/:_id" component={Producto} exact></Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/" component={Home} exact></Route>
      </Switch>
    </Router>
  );
}

// puedo exportar acá o directamente directamente en la declaracion del componnte como arriba
// export default App;

// REACT HOOKS ??

/** JSX
 * es un tipo de sintaxis que extiende la sintaxis de JavaScript y produce “elementos” de React.
 * Similar a templates engines pero viene con todo el poder de JavaScript. React no requiere usar JSX,
 * pero es recomendable ya que permite que React muestre mensajes de error o advertencia más útiles.
 * https://es.reactjs.org/docs/introducing-jsx.html#embedding-expressions-in-jsx
 *                             Puedes poner cualquier expresión de JavaScript dentro de llaves en JSX
 * const name = 'Josh Perez'; const element = <h1>Hello, {name}</h1>;
 */
