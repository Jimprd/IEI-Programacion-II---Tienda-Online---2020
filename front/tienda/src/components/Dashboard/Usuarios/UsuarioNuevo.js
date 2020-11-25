import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2"

/**
 * MIS COMPONENTES
 */
import gestorAxios from "../../../config/axios";
import { Proximamente } from "../../Detalles"

export default function Registro() {

    const [usuario, guardarUsuario] = useState({
        nombre: "",
        apellido: "",
        email: "",
        password: "",
    });

    const guardarValor = (e) => {
        // console.log(e.target.name, e.target.value);
        // el spread operator (...) es un iterador incorporado desde ES6
        guardarUsuario({
            ...usuario,
            [e.target.name]: e.target.value,
        });
    };

    const crearUsuario = async (e) => {
        e.preventDefault();
        console.info(usuario);
        const respuesta = await gestorAxios.post("/usuarios/", usuario);
        console.log("La Respuesta", respuesta);
        if (respuesta.status === 201) {
            Swal.fire(
                respuesta.data.usuario.email,
                respuesta.data.message,
                "success"
            );
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Algo salió mal!",
                footer: "<a href>Why do I have this issue?</a>",
            });
        }
    };

    return (
        <>
            <Proximamente />
            <div className="ui container">
                <h1>REGISTRATE</h1>
                <Link to="/dashboard/usuarios" className="ui button">Volver</Link>
                <Link to="/dashboard/" className="ui button">Ir a Panel Adminsitrativo</Link>
                <br></br>
                <br></br>
                <br></br>
                <div className="column">
                    <form className="ui equal width form" onSubmit={crearUsuario}>
                        <div className="fields">
                            <input
                                type="text"
                                name="nombre"
                                placeholder="Juan"
                                required
                                onChange={guardarValor}
                            ></input>
                            <input
                                type="text"
                                name="apellido"
                                placeholder="Perez"
                                required
                                onChange={guardarValor}
                            ></input>
                        </div>

                        <div className="fields">
                            <div className="ui labeled input">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="juanperez@ejemplo.com"
                                    required
                                    onChange={guardarValor}
                                ></input>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Contraseña"
                                    required
                                    onChange={guardarValor}
                                ></input>
                            </div>
                        </div>

                        <div>
                            <input
                                className="ui toggle button active"
                                type="submit"
                                value="Crear Cuenta"
                            ></input>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}