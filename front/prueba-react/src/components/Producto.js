import React, { Component } from "react";
import axios from "axios"; // nos sirve para comunicarnos y hacer peticiones al back-end, o bien podríamos usar fetch() y no axios
// import { Link } from "react-router-dom";

//MIS COMPONENTES
import Menu from "./Menu";

export default class Producto extends Component {
  constructor(props) {
    super(props);
    console.info(props);
    // console.log("Sale Constructor");
  }

  state = {
    producto: {},
  };

  componentDidMount() {
    console.info("Entró a componentDidMount");
    /**
     * 3 métodos para renderizar el componente (propiedades de Route) nos permiten acceder a 3 props
     * adicionales que ontienen la data del API de historia de HTML5 y estos son: match,location, history.
     */
    const {
      match: { params },
    } = this.props;

    // console.info("Entrando al props");
    // console.log(this.props);

    // const _id = params._id;
    // console.info(_id);
    axios
      .get("http://localhost:4000/producto/_id/" + params._id)
      .then((res) => {
        // console.log(res.data);
        const prod = res.data.products[0];
        this.setState({ producto: prod });
        // console.info(this.state.producto.nombre);
        // console.info("Sale axios Producto");
      });
  }

  render() {
    // en este espacio puedo declarar variables javascript, json, funciones.
    // console.info(this.props);

    // console.log(this.state);

    return (
      /**
       * return solo puede devolver 1 etiqueta html. Si tenemos más de un elemento deberemos anidarlo
       * en un padre, generalmente un div o podremos usar un <React.Fragment> </React.Fragment> o
       * simplemente un frangment abreviado <> </> (etiqueta de aprtura y cierre sin nombre de elemento)
       */
      <div>
        <Menu />
       <h1> PAGINA DEL PRODUCTO </h1>
        <div key={this.state.producto._id}>
          <div>
            {this.state.producto.nombre} - ${this.state.producto.precio} -{" "}
            {this.state.producto.codigoArticulo}
          </div>
        </div>
      </div>
    );
  }
}
