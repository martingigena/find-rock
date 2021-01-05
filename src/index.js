import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*
//JavaScript Pelado o Vanilla
let elemento = document.createElement('p');
elemento.innerHTML = 'Soy Martin';
let contenedor = document.getElementById('root');
contenedor.appendChild(elemento)
*/

/*
//Con React
let elemento = <p> Soy Martin </p>;
let container = document.getElementById("root");
ReactDOM.render(elemento, container);
*/

/*
//Otro ejemplo con react
let jsx = React.createElement(
  "h1",
  {},
  "Hola Mundo, Soy Martin con createElement"
);
let container = document.getElementById("root");
ReactDOM.render(jsx, container);
*/

/*
//Otro ejemplo mas con react
let nombre = "Martin";
let apellido = "Gigena ";
let calculo = (edad) => {
  return edad + 5;
};
let jsxMultiple = (
  <div>
    <h1>Soy una variable con muchos elementos</h1>
    <h3>JSX Es lo mejor</h3>
    <p>
      Esto es lo mas, aguante {nombre} {apellido},y tengo {calculo(23)} años
    </p>
  </div>
);
let container = document.getElementById("root");
ReactDOM.render(jsxMultiple, container);
*/
