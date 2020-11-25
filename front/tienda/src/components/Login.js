import React from "react";
import { Link } from "react-router-dom";
// import Menu from "./Menu";
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

/**
 * Mis Componentes
 */


/**
 * Componente Default
 */
export default function Login() {
  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' textAlign='center' color='orange'>
          <Image src='/images/muestra.jpg' /> Ingresá a tu cuenta
      </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input fluid icon='user' iconPosition='left' placeholder='juanpanadero@gmail.com' />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Contraseña'
              type='password'
            />

            <Button color='orange' fluid size='large'>
              Ingresar
          </Button>
          </Segment>
        </Form>
        <Message>
          Aún no tenés tu cuenta? <Link to='/registrate'>Registrate</Link>
        </Message>
      </Grid.Column>
    </Grid>
  )
}



// export default function Login() {
//   return (
//     <div className="ui middle aligned center aligned grid">
//       <div className="column">
//         <h2 className="ui orange center aligned header">Ingresá a tu cuenta</h2>
//         <form className="ui large form">
//           <div className="ui stacked segment">
//             <div className="field">
//               <div className="ui left icon input">
//                 <i className="user icon"></i>
//                 <input
//                   type="text"
//                   name="email"
//                   placeholder="E-mail address"
//                 ></input>
//               </div>
//             </div>
//             <div className="field">
//               <div className="ui left icon input">
//                 <i className="lock icon"></i>
//                 <input
//                   type="password"
//                   name="password"
//                   placeholder="Password"
//                 ></input>
//               </div>
//             </div>
//             <div className="ui fluid large orange submit button">Login</div>
//           </div>

//           <div className="ui error message"></div>
//         </form>
//         <div className="ui message">
//           Aún no tenés una cuenta? <Link to="#">Registrate !</Link>
//         </div>
//       </div>
//     </div>
//   );
// }
