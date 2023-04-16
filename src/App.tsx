import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Dropdown from "react-bootstrap/Dropdown";
import { BarrasApiladas } from "./components/BarrasApiladas";
import { BarrasHorizontales } from "./components/BarrasHorizontales";
import { BarrasVerticales } from "./components/BarrasVerticales";
import "./app.css";

function App() {
  const [grafico, setGrafico] = React.useState<number>(0);
  const [data, setData] = React.useState<number>(0);

  const seleccionarGrafico = (item: number): any => {
    setGrafico(item);
  };

  const seleccionarData = (item: number): any => {
    setData(item);
  };

  const textGrafico = [
    "Gráfico de barras verticales",
    "Gráfico de barras horizontales",
    "Gráfico de barras apiladas",
  ];

  const textData = [
    "Ventas al por mayor",
    "Ventas al por menor",
    "Usuarios por ciudad",
  ];

  return (
    <Container>
      <Row className="justify-content-md-center">
        <h1 className="display-1 text-center main-title">
          Datos estadísticos del mercado
        </h1>

        <h5>Seleccionar para filtrar la información</h5>

        <div className="row">
          <div className="col-xl-2 col-lg-12 m-bottom">
            <Dropdown>
              <Dropdown.Toggle variant="success">
                Filtrar por gráfico
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={() => seleccionarGrafico(0)}>
                  {textGrafico[0]}
                </Dropdown.Item>
                <Dropdown.Item onClick={() => seleccionarGrafico(1)}>
                  {textGrafico[1]}
                </Dropdown.Item>
                <Dropdown.Item onClick={() => seleccionarGrafico(2)}>
                  {textGrafico[2]}
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="col-xl-2 col-lg-12 m-bottom">
            <Dropdown>
              <Dropdown.Toggle variant="success">
                Filtrar por información
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={() => seleccionarData(0)}>
                  {textData[0]}
                </Dropdown.Item>
                <Dropdown.Item onClick={() => seleccionarData(1)}>
                  {textData[1]}
                </Dropdown.Item>
                <Dropdown.Item onClick={() => seleccionarData(2)}>
                  {textData[2]}
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>

        <h4 className="text-center">
          <small className="text-muted">
            {`${textGrafico[grafico]}`}
            <br />
            {`${textData[data]}`}
          </small>
        </h4>
        <div
          className="canvas-box"
          style={grafico === 0 ? { display: "block" } : { display: "none" }}
        >
          <BarrasVerticales dataSelected={data} />
        </div>
        <div
          className="canvas-box"
          style={grafico === 1 ? { display: "block" } : { display: "none" }}
        >
          <BarrasHorizontales dataSelected={data} />
        </div>
        <div
          className="canvas-box"
          style={grafico === 2 ? { display: "block" } : { display: "none" }}
        >
          <BarrasApiladas dataSelected={data} />
        </div>
      </Row>
    </Container>
  );
}

export default App;
