// Import the interpolate function

import inverseLagrangeInterpolation from "../functions/Interpolate";

import React, { useState } from "react";

function InverseInterpolation() {
  // Estado para almacenar los valores de x e y
  const [xValues, setXValues] = useState([]);
  const [yValues, setYValues] = useState([]);
  // Estado para almacenar el valor de y para el que queremos estimar el valor de x
  const [y, setY] = useState(0);
  // Estado para almacenar el resultado de la interpolación inversa
  const [result, setResult] = useState(0);

  // Función para manejar el cambio en los inputs de x e y
  const handleChange = (e, setValues) => {
    const values = e.target.value.split(",").map(Number);
    setValues(values);
  };

  // Función para realizar la interpolación inversa
  const interpolate = () => {
    const x = inverseLagrangeInterpolation(
      y,
      xValues,
      yValues,
      xValues.length,
      0
    );
    setResult(x);
  };

  return (
    <div className="container">
      <br />
      <h1
        className="
        text-center  display-4  fst-italic
      "
      >
        Interpolacion Inversa : <small>por el metodo de Lagrage</small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-6">
          <h3>Introducir datos</h3>
          <hr />
          <label className="form-label display-7  fst-italic">
            Tabla X :
            <input
              type="text"
              onChange={(e) => handleChange(e, setXValues)}
              className="form-control"
            />
          </label>
          <br />
          <label className="form-label display-7  fst-italic">
            Tabla Y :
            <input
              className="form-control"
              type="text"
              onChange={(e) => handleChange(e, setYValues)}
            />
          </label>
          <br />
          <label className="form-label display-7  fst-italic">
            y:
            <input
              className="form-control"
              type="number"
              value={y}
              onChange={(e) => setY(Number(e.target.value))}
            />
          </label>
          <br />
        </div>
        <div className="col-6">
          <h3>Resultado</h3>
          <hr />
          <br />
          <button className="btn btn-primary" onClick={interpolate}>
            Calcular
          </button>
          <br />
          <br />
          <h5>Resultado :</h5>
          <label className="form-label display-7  fst-italic">{result}</label>
        </div>
      </div>
    </div>
  );
}

export default InverseInterpolation;
