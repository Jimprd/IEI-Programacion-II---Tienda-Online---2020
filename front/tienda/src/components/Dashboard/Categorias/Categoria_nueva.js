import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form, TextArea } from 'semantic-ui-react';
import { Container, Header } from 'semantic-ui-react';
import Swal from "sweetalert2";

/**
 * MIS COMPONENTES
*/
import { Proximamente } from "../../Detalles";
import gestorAxios from "../../../config/axios"; // nos sirve para comunicarnos y hacer peticiones al back-end, o bien podríamos usar fetch() y no axios

export default function CategoriaNueva() {
    const [categoria, guardarCategoria] = useState({
        nombre: "",
        descripcion: ""
    });

    // Capturar entradas del Usuario
    const guardarValor = (e) => {
        guardarCategoria({
            ...categoria,
            [e.target.name]: e.target.value,
        });
    };

    // Alertas
    const crearCategoria = async (e) => {
        e.target.reset();
        e.preventDefault();
        const respuesta = await gestorAxios.post("/categorias/", categoria);
        if (respuesta.status === 201) {
            Swal.fire(
                respuesta.data.categoria.nombre,
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
            <Proximamente />
            <Container >
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Header as="h1" textAlign="center">Nueva Categoría</Header>
                <Link to="/dashboard/categorias" className="ui button">Administrar Categorías</Link>
                <Link to="/dashboard/" className="ui button">Ir a Panel Administrativo</Link>
                <Link to="/dashboard/categoria-nueva" className="positive ui fluid button" >Ingresar nueva categoría</Link>
                <Form onSubmit={crearCategoria}>
                    <Form.Field>
                        <label>Nombre</label>
                        <input type="text" name="nombre" placeholder='Electrodomésticos' onChange={guardarValor} />
                    </Form.Field>
                    <Form.Field>
                        <label>Descripción</label>
                        <TextArea type="text" name="descripcion" placeholder='Artefactos eléctricos para el hogar...' onChange={guardarValor} />
                    </Form.Field>
                    <Button type='submit'>Ingresar</Button>
                </Form>
            </Container>
        </>
    )
}
