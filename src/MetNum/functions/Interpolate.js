function inverseLagrangeInterpolation(
  y,
  xValues,
  yValues,
  numPoints,
  studyPoint
) {
  // y es el valor de la variable dependiente para el que queremos estimar el valor de la variable independiente
  // xValues es un array con los valores conocidos de la variable independiente
  // yValues es un array con los valores conocidos de la variable dependiente
  // numPoints es el número de puntos a considerar para la interpolación
  // studyPoint es el índice del punto de estudio en el array xValues
  let result = 0;

  for (let i = 0; i < numPoints; i++) {
    let term = xValues[studyPoint + i];
    for (let j = 0; j < numPoints; j++) {
      if (i !== j) {
        term *=
          (y - yValues[studyPoint + j]) /
          (yValues[studyPoint + i] - yValues[studyPoint + j]);
      }
    }
    result += term;
  }

  return result;
}

export default inverseLagrangeInterpolation;

// export function interpolate(numPoints, pointFunc, x) {
//   // Initialize result
//   let result = 0;

//   // Generate the points using the provided function
//   let points = [];
//   for (let i = 0; i < numPoints; i++) {
//     points.push(pointFunc(i));
//   }

//   // Create the table element
//   let table = document.createElement("table");

//   // Loop through each point
//   for (let i = 0; i < points.length; i++) {
//     // Get the current point
//     let point = points[i];
//     let x_i = point[0];
//     let y_i = point[1];

//     // Initialize the base polynomial
//     let base = 1;

//     // Loop through the rest of the points
//     for (let j = 0; j < points.length; j++) {
//       // Skip the current point
//       if (i == j) continue;

//       // Get the next point
//       let nextPoint = points[j];
//       let x_j = nextPoint[0];

//       // Multiply the base by the result of (x - x_j)/(x_i - x_j)
//       base *= (x - x_j) / (x_i - x_j);
//     }

//     // Add y_i * base to the result
//     result += y_i * base;

//     // Add a row to the table
//     let row = table.insertRow();
//     let cell1 = row.insertCell();
//     let cell2 = row.insertCell();
//     let cell3 = row.insertCell();
//     cell1.innerHTML = x_i;
//     cell2.innerHTML = y_i;
//     cell3.innerHTML = base.toFixed(3);
//   }

//   // Add the table to the document
//   document.body.appendChild(table);

//   // Add the result and study point to the document
//   let resultElem = document.createElement("div style='margin-top: 20px;");
//   resultElem.innerHTML = `Result: ${result.toFixed(3)}`;
//   document.body.appendChild(resultElem);
//   let studyPointElem = document.createElement("div");
//   studyPointElem.innerHTML = `Study point: ${x}`;
//   document.body.appendChild(studyPointElem);

//   // Return the result
//   return result;
// }
