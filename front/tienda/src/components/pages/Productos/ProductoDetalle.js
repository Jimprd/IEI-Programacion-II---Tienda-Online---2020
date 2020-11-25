import React, { useEffect, useState, Component } from "react";
import { Link } from "react-router-dom";
import { Container, Button, Image, Header, Label, Segment, TransitionablePortal } from 'semantic-ui-react';

/**
 * MIS COMPONENTES
 */
import NavBar from "../../header/NavBar"; import gestorAxios from "../../../config/axios";
import Footer from "../../footer/Footer";

/**
 * COMPONENTE DEFAULT
 */
export default function Producto(props) {

  const [producto, guardarProducto] = useState([]);

  useEffect(() => {
    if (producto.length === 0) {
      gestorAxios.get(`/producto/_id/${props.match.params._id}`).then((res) => {
        guardarProducto(res.data.products[0]);
      });
    }
  });


  return (
    <>
      <NavBar />
      <Container>
        <Image src='/images/muestra.jpg' />
        <Header as="h1">{producto.nombre}</Header>

        <Label color={"red"}>
          Stock
          <Label.Detail>{producto.stock}</Label.Detail>
        </Label>

        <Label as='a' color='teal' tag>
          {"$ " + producto.precio}
        </Label>

        <br></br>
        <br></br>
        {/* <Button content={"Agregar Al Carrito"} icon={"cart plus"} color={"green"} /> */}
        <CarritoProvisorio />
        <Header as="h2">Descripción</Header>

        <p>{producto.descripcion}</p>
        <br></br>

      </Container>
      < Footer />

    </>
  );
}

/**
 * Aviso
 */
class CarritoProvisorio extends Component {
  state = { open: false }

  handleClick = () => this.setState((prevState) => ({ open: !prevState.open }))
  handleClose = () => this.setState({ open: false })

  render() {
    const { open } = this.state

    return (
      <div>
        <Button
          content={open ? 'Cerrar Mensaje' : 'Agregar Al Carrito'}
          primary={open}
          positive={!open}
          icon={"cart plus"}
          onClick={this.handleClick}
        />

        <TransitionablePortal onClose={this.handleClose} open={open}>
          <Segment
            style={{ left: '40%', position: 'fixed', top: '50%', zIndex: 1000 }}
          >
            <Header>Uups! el Carrito estará disponible próximamente</Header>
            <p>Mientras tanto <Link to={"/contacto"}>contáctanos</Link>.</p>
            <p>Indicanos el producto, un teléfono y nos pondremos en contacto <br></br>
            con vos a la brevedad para coordinar los detalles y la entega.</p>
          </Segment>
        </TransitionablePortal>
      </div>
    )
  }
}