import React, { useEffect, useState } from "react";
import { Bar } from 'react-chartjs-2';
import { Container, Header, } from 'semantic-ui-react'

/**
 * Mis Componentes
 */
import gestorAxios from "../../../config/axios";

/**
 * COMPONENTE DEFAULT
 */
export default function GraficaStock() {

  const [productos, guardarProductos] = useState({});
  const [chartData, guardarData] = useState({});

  useEffect(() => {
    if (productos.length === undefined) {
      obtenerProductos();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);// corchete vacío corta el bucle infinito de useEffect, llenarlo aca me da bucle infinito

  const obtenerProductos = async () => {
    await gestorAxios.get("/producto/").then((res) => {
      guardarProductos(res.data.products);
      llenarGrafica(res.data.products);
    });
  }

  const llenarGrafica = (prod) => {
    let lbl = [];
    let stk = [];

    for (const item in prod) {
      lbl[item] = prod[item].nombre;
      stk[item] = prod[item].stock;
    }
    chart(lbl, stk);
  }

  const chart = (lbl, stk) => {
    guardarData({
      labels: lbl,
      datasets: [
        {
          label: "Stock Actual",
          data: stk,
          backgroundColor: "teal",
        }
      ],
    },
    )
  };

  return (

    <Container>
      <br></br>
      <br></br>
      < Header as="h2" textAlign={"center"}>Productos Más Vendidos</Header>
      <div className="chart-container" style={{ position: "relative", height: "40vh", width: "80vw" }}>

        <Bar
          data={chartData}
          width={100}
          height={50}
          options={
            {
              maintainAspectRatio: false,
              scales: {
                yAxes: [{ ticks: { beginAtZero: true } }]
              }
            }
          }
        />
      </div>
    </Container>
  );
}
