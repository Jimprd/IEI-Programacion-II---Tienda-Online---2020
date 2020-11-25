import React from "react";
import { Link } from "react-router-dom";
import {
  Container, Grid,
  Popup, Sidebar, Menu, Card, Search,
  Segment,
  Icon, Button
} from 'semantic-ui-react';


/**
 * MIS COMPONENTES
 */
import "./Dashboard.css";
import GraficaStock from "./Charts/Chart";


/**
 * Colores
 */
const colores = {
  deco: "orange",
  alerta: "red",
  black: "black"
}

let fecha = new Date();
console.log("FECHA", fecha)


/**
 * COMPONENTE DEFAULT
 */
export default function Dashboard() {

  return (
    <Container fluid>
      <SideBar
        Contenido={
          <>
            <Tarjetas />

            <GraficaStock />

            <Estadisticas />
          </>
        }
      />
    </Container>
  );
}


/**
 * SEMANTIC UI COMPONENTES
 */
const IconProducto = () => <Icon name='zip' size="big" floated='right' />;


/**
 * CARDS
 */
// const Cards = () => (
//   <Card.Group>

//     {/* PRODUCTOS */}
//     <Card>
//       <Card.Content>
//         <div className="ui right floated header red">
//           <i className="icon shopping cart"></i>
//         </div>
//         <Card.Header>Administrar Productos</Card.Header>
//         <Card.Meta>Alerta De Stock! (proximamente)</Card.Meta>
//         <Card.Description>

//         </Card.Description>
//       </Card.Content>
//       <Card.Content extra>
//         <div class="ui inverted segment">
//           <div className='ui two buttons'>
//             <Link to="/dashboard/productos" className="ui inverted button blue">Ver Todos</Link>
//             <Link to="/dashboard/producto-nuevo" className="ui inverted button green">Añadir</Link>
//           </div>
//         </div>
//       </Card.Content>
//     </Card>

//     {/* PEDIDOS */}
//     <Card>
//       <Card.Content>
//         <div className="ui right floated header red">
//           <i className="icon shopping cart"></i>
//         </div>
//         <Card.Header>Administrar Pedidos</Card.Header>
//         <Card.Meta>Alerta Pedidos atrasados??</Card.Meta>
//         <Card.Description>

//         </Card.Description>
//       </Card.Content>
//       <Card.Content extra>
//         <div className='ui three buttons'>
//           <Link to="/dashboard/productos" className="ui button inverted blue">Ver Todos</Link>
//           <Link to="/dashboard/producto-nuevo" className="ui button inverted green">Añadir</Link>
//         </div>

//       </Card.Content>
//     </Card>

//     {/* USUARIOS */}
//     <Card>
//       <Card.Content>
//         <div className="ui right floated header red">
//           <i className="icon shopping cart"></i>
//         </div>
//         <Card.Header>Administrar Usuarios</Card.Header>
//         <Card.Meta> </Card.Meta>
//         <Card.Description>

//         </Card.Description>
//       </Card.Content>
//       <Card.Content extra>
//         <div className='ui two buttons'>
//           <Link to="/dashboard/usuarios" className="ui button blue">Ver Todos</Link>
//           <Link to="/dashboard/usuario-nuevo" className="ui button green">Añadir</Link>
//         </div>
//       </Card.Content>
//     </Card>

//     {/* CATEGORIAS */}
//     <Card>
//       <Card.Content>
//         <div className="ui right floated header red">
//           <i className="icon shopping cart"></i>
//         </div>
//         <Card.Header>Administrar Categorias</Card.Header>
//         <Card.Meta> </Card.Meta>
//         <Card.Description></Card.Description>
//       </Card.Content>
//       <Card.Content extra>
//         <div className='ui two buttons'>
//           <Link to="/dashboard/categorias" className="ui button blue">Ver Todos</Link>
//           <Link to="/dashboard/categoria-nuevo" className="ui button green">Añadir</Link>
//         </div>
//       </Card.Content>
//     </Card>
//   </Card.Group>
// )


/**
 * SIDEBAR funcionalidades
 */
const VerticalSidebar = ({ animation, direction, visible }) => (
  <Sidebar id="lateral"
    as={Menu}
    animation={animation}
    direction={direction}
    icon='labeled'
    inverted
    vertical
    visible={visible}
    width='thin'
  >
    <Menu.Item as='a' color={`${colores.deco}`}>
      <Icon name='home' color={`${colores.deco}`} style={{ color: `${colores.deco}` }} />
        Home
      </Menu.Item>
    <Menu.Item as='a'>
      <Icon name='gamepad' color={`${colores.deco}`} />
        Games
      </Menu.Item>
    <Menu.Item as='a' href="/dashboard/usuarios">
      <Icon name='users' color={`${colores.deco}`} />
        El equipo
      </Menu.Item>
    <Menu.Item as='a'>
      <Icon name='chart pie' color={`${colores.deco}`} />
        Estadísticas
      </Menu.Item>
    <Menu.Item >
      <div class="ui segment inverted">
        <div class="ui tiny olive inverted progress">
          <div class="bar" style={{ width: "54%" }}></div>
          <div class="label">Ancho De Banda Mensual</div>
        </div>
      </div>
    </Menu.Item>
    <Menu.Item >
      <div class="ui segment inverted">
        <div class="ui tiny teal inverted progress">
          <div class="bar" style={{ width: "80%" }}></div>
          <div class="label">Espacio En Disco</div>
        </div>
      </div>
    </Menu.Item>
  </Sidebar>
)

function exampleReducer(state, action) {
  switch (action.type) {
    case 'CHANGE_ANIMATION':
      return { ...state, animation: action.animation, visible: !state.visible }
    case 'CHANGE_DIMMED':
      return { ...state, dimmed: action.dimmed }
    case 'CHANGE_DIRECTION':
      return { ...state, direction: action.direction, visible: false }
    default:
      throw new Error()
  }
}


/**
 * SIDEBAR
 */
export function SideBar(props) {

  const [state, dispatch] = React.useReducer(exampleReducer, {
    animation: 'overlay',
    direction: 'left',
    dimmed: false,
    visible: false,
  })

  const { dimmed, direction, visible } = state;
  const vertical = direction === 'bottom' || direction === 'top';

  return (
    <div>
      {/* NAVBAR */}
      <nav className="ui top fixed inverted menu">
        <div className={`left menu`} >
          <Button
            icon={`sidebar ${colores.deco}`}
            color={colores.black}
            active={"true"}
            onClick={() =>
              dispatch({ type: 'CHANGE_ANIMATION', animation: 'scale down' })
            }
          >
          </Button>
          <Link to="/dashboard" className={`header item textColor`} ><i class="icon tachometer alternate"></i>Panel Administrativo</Link>
        </div>

        <div >
          <Search className={`centered`} />
        </div>

        <div className="right menu">
          <Link to="#" className="item"><i className={`bell icon ${colores.deco}`}></i></Link>
          <Perfil />
        </div>
      </nav>
      <br></br>
      {/* NAVBAR FIN*/}

      {/* Side*/}
      <Sidebar.Pushable id="contenido" as={Segment} style={{ overflow: 'hidden' }}>

        {!vertical && (
          <VerticalSidebar
            animation={'left'}
            direction={'scale down'}
            visible={visible}
          />
        )}

        {/* CONTENIDO PRINCIPAL */}
        <Sidebar.Pusher dimmed={dimmed && visible}>
          <Segment basic>
            <br></br>

            {props.Contenido}

          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  )
}


/**
 * PERFIL
 */
const Perfil = () => (
  <Popup wide trigger=
    {
      <div className="ui dropdown item">
        <i className={`user cirlce icon ${colores.deco}`}></i>
      </div>
    } on='click'>
    <Grid divided columns='equal' >
      <Grid.Column >
        <Popup
          trigger={
            <Link to="#" className="item" ><i className={`info circle icon`}></i>Perfil</Link>
          }
          content='Configura tu cuenta.'
          position='bottom center'
          size='tiny'
          inverted
        />
      </Grid.Column>
      <Grid.Column>
        <Popup
          trigger={<Link to="#" className="item"><i className="cogs icon"></i>Ajuste</Link>}
          content='Ajustes del panel.'
          position='bottom center'
          size='tiny'
          inverted
        />
      </Grid.Column>
      <Grid.Column>
        <Popup
          trigger={<Link to="#" className="item"><i className="sign-out icon"></i>Salir</Link>}
          content='Cerrar tu sesión.'
          position='bottom center'
          size='tiny'
          inverted
        />
      </Grid.Column>
    </Grid>
  </Popup>
)


/**
 * TARJETAS
 */
function Tarjetas() {
  return (
    <div className="ui grid stackable padded">

      {/* PEDIDOS */}
      <div className="four wide computer eight wide tablet sixteen wide mobile column">
        <div className="ui fluid card">
          <div className="content">
            <div className="ui right floated header red">
              <i className="icon shopping cart"></i>
            </div>
            <div className="header">
              <div className="ui red header">Pedidos</div>
            </div>
            <div className="meta">300 ordenes acumuladas</div>
            <div className="description">aaaa</div>
          </div>
          <div className="extra content">
            <div className='ui two buttons'>
              <Link to="/dashboard/#" className="ui button blue">Ver Todos</Link>
              <Link to="/dashboard/#" className="ui button green">Añadir</Link>
            </div>
          </div>
        </div>
      </div>

      {/* PRODUCTOS */}
      <div className="four wide computer eight wide tablet sixteen wide mobile column">
        <div className="ui fluid card">
          <div className="content">
            <div className="ui right floated header green">
              <i className="icon gift"></i>
            </div>
            <div className="header">
              <div className="ui header green">Productos</div>
            </div>
            <div className="meta" style={{ color: `${colores.alerta}` }}>Alerta De Stock</div>
            <div className="description">aaaa</div>
          </div>
          <div className="extra content">
            <div className='ui two buttons'>
              <Link to="/dashboard/productos" className="ui button blue">Ver Todos</Link>
              <Link to="/dashboard/producto-nuevo" className="ui button green">Añadir</Link>
            </div>
          </div>
        </div>
      </div>

      {/* USUARIOS */}
      <div className="four wide computer eight wide tablet sixteen wide mobile column">
        <div className="ui fluid card">
          <div className="content">
            <div className="ui right floated header teal">
              <i className="icon briefcase"></i>
            </div>
            <div className="header">
              <div className="ui teal header">Usuarios</div>
            </div>
            <div className="meta">Saves</div>
            <div className="description">Gestionar cuentas de usuarios administrativos.</div>
          </div>
          <div className="extra content">
            <div className='ui two buttons'>
              <Link to="/dashboard/usuarios" className="ui button teal">Ver Todos</Link>
              <Link to="/dashboard/usuario-nuevo" className="ui button green">Añadir</Link>
            </div>
          </div>
        </div>
      </div>

      {/* CATEGORIAS */}
      <div className="four wide computer eight wide tablet sixteen wide mobile column">
        <div className="ui fluid card">
          <div className="content">
            <div className="ui right floated header purple">
              <i className="icon trophy"></i>
            </div>
            <div className="header">
              <div className="ui purple header">Categorías</div>
            </div>
            <div className="meta">Views</div>
            <div className="description">Elliot requested permission to view your contact details</div>
          </div>
          <div className="extra content">
            <div className='ui two buttons'>
              <Link to="/dashboard/categorias" className="ui button purple">Ver Todos</Link>
              <Link to="/dashboard/categoria-nuevo" className="ui button green">Añadir</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


/**
 * TABLA GIT
 */
function TablaGit() {
  return (
    <div className="ui grid stackable padded">
      <div className="column">
        <table className="ui celled striped table">
          <thead>
            <tr>
              <th colspan="3">Git Repository</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="collapsing">
                <i className="folder icon"></i> node_modules
              </td>
              <td>Initial commit</td>
              <td className="right aligned collapsing">10 hours ago</td>
            </tr>
            <tr>
              <td><i className="folder icon"></i>test</td>
              <td>Initial commit</td>
              <td className="right aligned">10 hours ago</td>
            </tr>
            <tr>
              <td><i className="folder icon"></i>build</td>
              <td>Initial commit</td>
              <td className="right aligned">10 hours ago</td>
            </tr>
            <tr>
              <td><i className="file outline icon"></i>package.json</td>
              <td>Initial commit</td>
              <td className="right aligned">10 hours ago</td>
            </tr>
            <tr>
              <td><i className="file outline icon"></i>Gruntfile.js</td>
              <td>Initial commit</td>
              <td className="right aligned">10 hours ago</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}


/**
 * ESTADISTICAS
 */
function Estadisticas() {
  return (

    <div className="ui grid stackable padded">
      <div className="four wide computer eight wide tablet sixteen wide mobile  center aligned column">
        <div className="ui teal statistic">
          <div className="value">5,550</div>
          <div className="label">Downloads</div>
        </div>
      </div>
      <div className="four wide computer eight wide tablet sixteen wide mobile  center aligned column">
        <div className="ui purple statistic">
          <div className="value">50+ </div>
          <div className="label">Developers</div>
        </div>
      </div>
      <div className="four wide computer eight wide tablet sixteen wide mobile  center aligned column">
        <div className="ui green statistic">
          <div className="value">800+</div>
          <div className="label">Commits</div>
        </div>
      </div>
      <div
        className="four wide computer eight wide tablet sixteen wide mobile  center aligned column">
        <div className="ui purple statistic">
          <div className="value">1000+</div>
          <div className="label">Cups of Coffee</div>
        </div>
      </div>
    </div>
  )
}

