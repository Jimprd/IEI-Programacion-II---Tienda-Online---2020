import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Container, Icon, Table } from 'semantic-ui-react';


/**
 * MIS COMPONENTES
 */
import gestorAxios from "../../../config/axios";


/**
 * SEMANTIC UI
 */
const IconTrash = () => <Icon name='trash' size='large' color='red' />
const IconView = () => <Icon name='eye' size='large' color='orange' />
const IconEdit = () => <Icon name='edit' size='large' color='blue' />


export default function Usuarios() {

  return (
    <Container>
      <h1>Cuentas De Usuarios</h1>
      <Link to="/dashboard/" className="ui button">Administrar Usuarios</Link>
      <Link to="/dashboard/usuario-nuevo" className="positive ui fluid button">Crear nueva cuenta de usuario</Link>
      <Table striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Nombre</Table.HeaderCell>
            <Table.HeaderCell>Apellido</Table.HeaderCell>
            <Table.HeaderCell>Email / Cuenta</Table.HeaderCell>
            <Table.HeaderCell>Ver</Table.HeaderCell>
            <Table.HeaderCell>Editar</Table.HeaderCell>
            <Table.HeaderCell>Eliminar</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        {/* BODY */}
        <TBody />
        {/* <Footer/> */}
      </Table>
    </Container>
  );
}


/**
 * BODY
 */
function TBody() {
  const [usuarios, guardarUsuarios] = useState([]);
  useEffect(() => {
    if (usuarios.length === 0) {
      gestorAxios.get("/usuarios/").then(
        (res) => {
          if (res.data.usuarios === undefined) {
            guardarUsuarios({ message: "No se encontraron registros." });
          } else {
            guardarUsuarios(res.data.usuarios);
          }
        }
      );
    }
  }, [usuarios]);

  /**
   * ELIMINAR
   */
  function Eliminar(e, usuario) {
    e.preventDefault();
    Swal.fire({
      title: "ATENCIÓN",
      text: `Estás por eliminar la cuenta de "${usuario.email}"`,
      footer: "Esta acción no se puede deshacer...",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Confirmar",
    }).then((result) => {
      if (result.isConfirmed) {
        gestorAxios.delete(`/usuarios/_id/${usuario._id}`).then((res) => {
          console.log("Res DATA", res.data.usuarios);
        });
        Swal.fire("Eliminado!", `La cuenta de "${usuario.email}" se eliminó correctamente.`, "success");
      }
    });
  };


  /**
   * RENDERIZAR
   */
  if (usuarios.message) {
    return (
      <>
        <Table.Body>
          <Table.Row className="ui warning message">
            <Table.Cell>
              <h2 className="header">{usuarios.message}</h2>
              <p>Haga click en "Crear Cuenta Nueva" para añadir un usuario.</p>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </>
    )
  }


  return (
    <Table.Body>
      {usuarios.map((usuario) => (
        <Table.Row key={usuario._id}>
          <Table.Cell >{usuario.nombre}</Table.Cell>
          <Table.Cell >{usuario.apellido}</Table.Cell>
          <Table.Cell >{usuario.email}</Table.Cell>

          <Table.Cell ><Link to={`/dashboard/usuario/_id/${usuario._id}`}><IconView /></Link></Table.Cell>
          <Table.Cell ><Link to="#Editar" ><IconEdit /></Link></Table.Cell>
          <Table.Cell ><Link to="#Eliminar" onClick={(e) => Eliminar(e, usuario)}><IconTrash /></Link></Table.Cell>
        </Table.Row>))}
    </Table.Body>
  )

}