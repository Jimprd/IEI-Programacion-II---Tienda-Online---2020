import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Container, Icon, Table, Header } from 'semantic-ui-react';

/**
 * MIS COMPONENTES
 */
import gestorAxios from "../../../config/axios";
import { Proximamente, Cargando } from "../../Detalles";

/**
 * SEMANTIC UI
 */
const IconTrash = () => <Icon name='trash' size='large' color='red' />
const IconView = () => <Icon name='eye' size='large' color='orange' />
const IconEdit = () => <Icon name='edit' size='large' color='blue' />

/**
 * COMPONENTE
 */
export default function Categorias() {
    return (
        <>
            <Proximamente />

            <Container >
                <Header as="h1" textAlign="center">Administrar Categorías</Header>
                <Link to="/dashboard/" className="ui button">Ir a Panel Administrativo</Link>
                <Link to="/dashboard/categoria-nueva" className="positive ui fluid button" >Ingresar nueva categoría</Link>
                <Table striped>
                    <THeader />
                    <TBody />
                </Table>
            </Container>
        </>
    );
}

/**
 * HEADER
 */
function THeader() {
    return (
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Categoría</Table.HeaderCell>
                <Table.HeaderCell>Descripción</Table.HeaderCell>
                <Table.HeaderCell textAlign={"center"}>Ver</Table.HeaderCell>
                <Table.HeaderCell textAlign={"center"}>Editar</Table.HeaderCell>
                <Table.HeaderCell textAlign={"center"}>Eliminar</Table.HeaderCell>
            </Table.Row>
        </Table.Header>
    )
}

/**
 * BODY
 */
function TBody() {
    const [categorias, guardarCategorias] = useState([]);

    useEffect(() => {
        obtenerCategorias();
    }, []);// corchete vacío corta el bucle infinito de useEffect

    const obtenerCategorias = () => {
        gestorAxios.get("/categorias/").then((res) => {
            guardarCategorias(res.data.categorias);
        });
    }

    /**
     * ELIMINAR
     */
    const eliminarCategoria = (categoria) => {
        Swal.fire({
            title: "ATENCIÓN",
            text: `Estás por eliminar: "${categoria.nombre}"`,
            footer: "Esta acción no se puede deshacer...",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: "Cancelar",
            confirmButtonText: "Confirmar",
        }).then((result) => {
            if (result.isConfirmed) {
                gestorAxios.delete(`/categorias/_id/${categoria._id}`).then((res) => {
                    console.log("Res DATA", res.data.categorias);
                    obtenerCategorias();
                });
                Swal.fire("Eliminado!", `${categoria.nombre} se eliminó correctamente.`, "success");
            }
        });
    };

    /**
     * RENDERIZAR
     */
    if (categorias === undefined) {
        return (
            <Table.Footer>
                <Table.Row className="ui warning message">
                    <Table.Cell colSpan='5'>
                        <h2 className="header">No se encontraron categorías.</h2>
                        <p>Haga click en "Ingresar nueva categoría" para cargar datos.</p>
                    </Table.Cell>
                </Table.Row>
            </Table.Footer >
        )
    }
    if (categorias.length === 0) {
        return (<Cargando />)
    } else {
        return (
            <Table.Body>
                {categorias.map((categoria) => (
                    <Table.Row key={categoria._id}>
                        <Table.Cell >{categoria.nombre}</Table.Cell>
                        <Table.Cell >{categoria.descripcion}</Table.Cell>

                        <Table.Cell textAlign={"center"}><Link to={`/dashboard/categoria/_id/${categoria._id}`}><IconView /></Link></Table.Cell>
                        <Table.Cell textAlign={"center"}><Link to="#Editar" ><IconEdit /></Link></Table.Cell>
                        <Table.Cell textAlign={"center"}><Link to="#Eliminar" onClick={() => eliminarCategoria(categoria)}><IconTrash /></Link></Table.Cell>
                    </Table.Row>))}
            </Table.Body>
        )
    }
}
