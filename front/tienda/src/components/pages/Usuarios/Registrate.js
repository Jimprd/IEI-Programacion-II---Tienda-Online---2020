import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


/**
 * MIS COMPONENTES
 */
import gestorAxios from "../../../config/axios";
import { Proximamente } from "../../Detalles";

import NavBar from "../../header/NavBar";
import Footer from "../../footer/Footer";


/**
 * COMPONENTE DEFAULT
 */
export default function Registro() {

    return (
        <>
            <NavBar />
            <Proximamente />
            <h1>REGISTRATE</h1>
            <div >
                <div className="ui container">
                    <FormularioRegistro />
                </div>
            </div>
            <Footer />
        </>
    )
}


function FormularioRegistro() {
    const [cliente, guardarCliente] = useState({
        nombre: "",
        apellido: "",
        email: "",
        password: "",
    });

    const guardarValor = (e) => {
        // console.log(e.target.name, e.target.value);
        // el spread operator (...) es un iterador incorporado desde ES6
        guardarCliente({
            ...cliente,
            [e.target.name]: e.target.value,
        });
    };


    const crearCliente = async (e) => {
        e.target.reset();
        e.preventDefault();
        console.info(cliente);
        const respuesta = await gestorAxios.post("/clientes/", cliente);
        console.log("La Respuesta", respuesta);
        if (respuesta.status === 201) {
            Swal.fire(
                respuesta.data.cliente.email,
                respuesta.data.message,
                "success"
            );
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Algo salió mal!",

            });
        }
    };

    return (
        <>
            <div class="panel-body row">
                <div class="col-md-6 col-sm-6">
                    <h3>Datos Requeridos</h3>
                    <form className="" onSubmit={crearCliente}>
                        <div class="form-group">
                            <label for="firstname">Nombre <span class="require">*</span></label>
                            <input type="text" name="nombre" id="firstname" class="form-control" placeholder="Juan" required onChange={guardarValor}></input>
                        </div>
                        <div class="form-group">
                            <label for="lastname">Apellido <span class="require">*</span></label>
                            <input type="text" name="apellido" id="lastname" class="form-control" placeholder="Juncos" onChange={guardarValor}></input>
                        </div>
                        <div class="form-group">
                            <label for="email">E-Mail <span class="require">*</span></label>
                            <input type="text" name="email" id="email" class="form-control" placeholder="juanjuncos@ejemplo.com" onChange={guardarValor}></input>
                        </div>

                        <h3>Creá Tu Contraseña</h3>
                        <div class="form-group">
                            <label for="password">Contraseña <span class="require">*</span></label>
                            <input type="password" name="password" id="password" class="form-control" onChange={guardarValor}></input>
                        </div>
                        <div class="form-group">
                            <label for="password-confirm">Confirmar Contraseña <span class="require" >*</span></label>
                            <input type="password" id="password-confirm" class="form-control" onChange={guardarValor}></input>
                        </div>
                        <button class="btn btn-primary  " type="submit" data-toggle="collapse" data-parent="#checkout-page" data-target="#shipping-address-content" id="button-payment-address">Crear Cuenta</button>
                    </form>
                </div>
            </div>
        </>
    )
}
