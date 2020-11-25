import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Container, Icon, Table, Menu, Header, Checkbox } from 'semantic-ui-react';


/**
 * MIS COMPONENTES
 */
import gestorAxios from "../../../config/axios";
import { SideBar } from "../Dashboard"
import { Proximamente, Cargando } from "../../Detalles";


/**
 * SEMANTIC UI
 */
const IconTrash = () => <Icon name='trash' size='large' color='red'/>
const IconView = () => <Icon name='eye' size='large' color='orange' />
const IconEdit = () => <Icon name='edit' size='large' color='blue' />


/**
 * COMPONENTE DEFAULT
 */
export default function Productos() {
  document.title = "Productos";
  return (
    <>
      <Container fluid>
        <SideBar
          Contenido={
            <>
              {/* <Proximamente /> */}
              <Header as="h1" textAlign="center">Administrar Productos </Header>
              <br></br>
              <Link to="/dashboard/producto-nuevo" className="positive ui fluid button">Ingresar un nuevo producto</Link>
              <br></br>
              <Link to="/dashboard/producto-nuevo" className="danger ui negative button">Eliminar Seleccionados</Link>
              <Table striped >
                <THeader />
                <TBody />
                <Footer />
              </Table>
            </>
          }
        />
      </Container>
    </>
  );
}


/**
 * TABLA HEADER
 */
function THeader() {
  return (
    <Table.Header>
      <Table.Row >
        <Table.HeaderCell></Table.HeaderCell>
        <Table.HeaderCell>Producto</Table.HeaderCell>
        <Table.HeaderCell>Precio Venta</Table.HeaderCell>
        <Table.HeaderCell>Stock</Table.HeaderCell>
        <Table.HeaderCell textAlign={"center"}>Ver</Table.HeaderCell>
        <Table.HeaderCell textAlign={"center"}>Editar</Table.HeaderCell>
        <Table.HeaderCell textAlign={"center"}>Eliminar</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
  )
}


/**
 * TABLA BODY
 */
function TBody() {

  const [productos, guardarProductos] = useState([]);

  useEffect(() => {
    obtenerProductos();
  }, []);// corchete vacío corta el bucle infinito de useEffect

  const obtenerProductos = () => {
    gestorAxios.get("/producto/").then((res) => {
      guardarProductos(res.data.products);
    });
  }


  /**
   * ELIMINAR
   */
  const eliminarProducto = (producto) => {
    Swal.fire({
      title: "ATENCIÓN",
      text: `Estás por eliminar: "${producto.nombre}"`,
      footer: "Esta acción no se puede deshacer...",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Confirmar",
    }).then((result) => {
      if (result.isConfirmed) {
        gestorAxios.delete(`/producto/_id/${producto._id}`).then((res) => {
          console.log("Res DATA", res.data.products);
          obtenerProductos();
        });
        Swal.fire("Eliminado!", `${producto.nombre} se eliminó correctamente.`, "success");
      }
    });
  };


  /**
   * RENDERIZAR
   */
  if (productos === undefined) {
    return (
      <>
        <Table.Footer>
          <Table.Row className="ui warning message">
            <Table.Cell colSpan='6'>
              <h2 className="header">No se encontraron productos.</h2>
              <p>Haga click en "Ingresar un nuevo producto" para cargar datos.</p>
            </Table.Cell>
          </Table.Row>
        </Table.Footer >
      </>
    )
  }
  if (productos.length === 0) {
    return (
      <>
        <Cargando />
      </>
    )
  } else {
    return (
      <Table.Body>
        {productos.map((producto) => (
          <Table.Row key={producto._id}>
            <Table.Cell collapsing>
              <Checkbox slider />
            </Table.Cell>
            <Table.Cell >{producto.nombre}</Table.Cell>
            <Table.Cell >$ {producto.precio}</Table.Cell>
            <Table.Cell >{producto.stock}</Table.Cell>

            <Table.Cell textAlign={"center"}><Link to={`/dashboard/producto/_id/${producto._id}`} ><IconView /></Link></Table.Cell>
            <Table.Cell textAlign={"center"}><Link to="#Editar" ><IconEdit /></Link></Table.Cell>
            <Table.Cell textAlign={"center"}><Link to="/dashboard/productos" onClick={() => eliminarProducto(producto)}><IconTrash /></Link></Table.Cell>
          </Table.Row>))}
      </Table.Body>
    )
  }
}

/**
 * FOOTER
 */
function Footer() {
  return (
    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='3'>
          <Menu floated='right' pagination>
            <Menu.Item as='a' icon>
              <Icon name='chevron left' />
            </Menu.Item>
            <Menu.Item as='a'>1</Menu.Item>
            <Menu.Item as='a'>2</Menu.Item>
            <Menu.Item as='a'>3</Menu.Item>
            <Menu.Item as='a'>4</Menu.Item>
            <Menu.Item as='a' icon>
              <Icon name='chevron right' />
            </Menu.Item>
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  )
}