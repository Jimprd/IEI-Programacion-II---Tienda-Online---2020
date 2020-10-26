import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

//MIS COMPONENTES
import Menu from "./Menu";

// Un fichero.js puede tener más de un componente, pero debe tener uno y sólo un export default
export default class Productos extends Component {
  constructor(props) {
    super(props);
  }
  state = { productos: [] };

  componentDidMount() {
    axios.get("http://localhost:4000/producto/").then((res) => {
      const prod = res.data.products; // todo lo que nos responda o devuelva el back-end viene en 'data'
      this.setState({ productos: prod });
    });
  }

  /**
   * Otros componentes declarados en el mismo fichero también deben ser exportados para ser usados
   * pero no por default, sino una exportación común.
   *
   * export OtroComponente extends Component {
   *   ....
   * }
   *
   * Para importarlo:
   *                 // importar exportados comunes
   * import Productos, {OtroComponente} from './components/productos.js';
   *
   * Para usarlo en html:
   *
   * <Productos/>
   * <OtroComponente/>
   */

  render() {
    /** keys
     * Ayudan a React a identificar que ítems han cambiado, son agregados, o son eliminados. Deben ser
     * dadas a los elementos dentro del array para darle a los elementos una identidad estable.
     */

    return (
      <div>
        <Menu />
        <h1>Todos Los Productos</h1>
        <div>
          {this.state.productos.map((producto) => (
            <div key={producto._id}>
              {producto.nombre} - $ {producto.precio} <br />
              <Link to={`/producto/_id/${producto._id}`}>Ver</Link>
              <hr />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

/** COMPONENTES
 * Los componentes son como las funciones de JavaScript. Aceptan entradas arbitrarias (llamadas “props”)
 * y devuelven a React elementos que describen lo que debe aparecer en la pantalla.
 *
 * Componentes Funcionales y de Clase
 * Ambos son equivalentes desde el punto de vista de React
 ** Funcionales:
 *   es un componente de React válido porque acepta solo argumento de objeto “props” con
 *   datos y devuelve un elemento de React. Literalmente son funciones JavaScript.
 *
 *  function Welcome(props) {
 *    return <h1>Hello, {props.name}</h1>;
 *  }
 *
 ** Clase:
 *   Utilizar una clase de ES6 para definir un componente:
 *
 *   class Welcome extends React.Component {
 *     render() {
 *      return <h1>Hello, {this.props.name}</h1>;
 *    }
 *  }
 *
 * Cuando React ve un elemento representando un componente definido por el usuario, pasa atributos JSX
 * e hijos a este componente como un solo objeto. Llamamos a este objeto “props”.
 *
 */
