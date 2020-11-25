import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import "semantic-ui-react";


/**
 * IMPORTANDO MIS COMPONENTES
 */
/**
 * TIENDA 
 */
import Home from "./components/pages/Home/Home";

import Login from "./components/Login";

// import Producto from "./components/pages/Productos/Producto";
import ProductoDetalle from "./components/pages/Productos/ProductoDetalle";
import Productos from "./components/pages/Productos/Productos";

import Registrate from "./components/pages/Usuarios/Registrate";
import PerfilUsuario from "./components/pages/Usuarios/ClientePerfil";

/**
 * DASHBOARD 
 */
import Dashboard from "./components/Dashboard/Dashboard";

import DCategorias from "./components/Dashboard/Categorias/Categorias"
import DCategoriaNueva from "./components/Dashboard/Categorias/Categoria_nueva"

import DLogin from "./components/Dashboard/Login";

import DProductos from "./components/Dashboard/Productos/Productos";
import DProductoNuevo from "./components/Dashboard/Productos/Producto_nuevo";
import DProducto from "./components/Dashboard/Productos/Producto";

import DUsuarios from "./components/Dashboard/Usuarios/Usuarios";
import DUsuarioNuevo from "./components/Dashboard/Usuarios/UsuarioNuevo";


/**
 * APP
 */
export default function App() {
  return (
    <Router>

      {/* TIENDA */}
      <Switch>
        <Route path="/" component={Home} exact></Route>

        <Route path="/login" component={Login} exact></Route>


        <Route path="/producto/_id/:_id" component={ProductoDetalle} exact></Route>
        <Route path="/productos/" component={Productos} exact></Route>

        <Route path="/registrate/" component={Registrate} exact></Route>
        <Route path="/micuenta/" component={PerfilUsuario} exact></Route>
      </Switch>


      {/* DASHBOARD */}
      <Switch>
        <Route path="/dashboard/" component={Dashboard} exact></Route>

        <Route path="/dashboard/categorias" component={DCategorias} exact></Route>
        <Route path="/dashboard/categoria-nueva" component={DCategoriaNueva} exact></Route>

        <Route path="/dashboard/Login" component={DLogin} exact></Route>


        <Route path="/dashboard/productos" component={DProductos} exact></Route>
        <Route path="/dashboard/producto/_id/:_id" component={DProducto} exact></Route>
        <Route
          path="/dashboard/producto-nuevo" component={DProductoNuevo} exact
        ></Route>

        <Route path="/dashboard/usuarios" component={DUsuarios} exact></Route>

        <Route path="/dashboard/usuario-nuevo" component={DUsuarioNuevo} exact></Route>
      </Switch>
      
    </Router>
  );
}
