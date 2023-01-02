import React, { useState } from "react";

function ManualInput() {
  // Estado para almacenar los valores de x e y
  const [xValues, setXValues] = useState([]);
  const [yValues, setYValues] = useState([]);

  console.log(xValues, yValues);

  // Función para manejar el cambio en los inputs de x e y
  const handleChange = (e, setValues) => {
    const values = e.target.value.split(",").map(Number);
    setValues(values);
  };

  return (
    <div>
      <h2>Manual Input</h2>
      <label>
        x values:
        <input type="text" onChange={(e) => handleChange(e, setXValues)} />
      </label>
      <br />
      <label>
        y values:
        <input type="text" onChange={(e) => handleChange(e, setYValues)} />
      </label>
    </div>
  );
}

export default ManualInput;
