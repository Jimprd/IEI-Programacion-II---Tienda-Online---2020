import React from "react";
import { Container, Grid, Image, Dimmer, Loader } from 'semantic-ui-react';

export default function Detalles() {
    return (<></>)
}



/**
 * Sitio en Construcción
 */
export function Proximamente() {
    const sombreado = {
        boxShadow: '0 7px 8px 0 rgba(0, 0, 0, 0.7)'
    }

    return (
        <>
            <Container fluid textAlign='center' style={{ backgroundColor: '#fbfbfb' }}>
                <Grid style={sombreado}>
                    <Grid.Column width={6}></Grid.Column>
                    <Grid.Column width={4}>
                        <Image src="../images/proximamente.png" alt="Próximamente, aún estamos construyendo esta parte..." />
                    </Grid.Column>
                    <Grid.Column width={6}></Grid.Column>
                </Grid>
            </Container>
            <br></br>
            <br></br>
        </>
    )
}

/**
 * Cargando
 */
export function Cargando() {
    return (
        <Dimmer active inverted>
            <Loader inverted>Cargando...</Loader>
        </Dimmer>
    )
}
