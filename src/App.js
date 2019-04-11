import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import alumno from './alumno.js';
import productos from './productos.js';

class App extends Component { 
  render() {
    console.log(" ### Ejercicio 1.a");
    productos.map( producto => console.log(producto.nombre ));

    console.log(" ### Ejercicio 1.b");
    let iphone8 = productos.find( producto => producto.nombre === 'iphone 8');
    console.log('cantidad de iphone8:' + iphone8.cantidad);

    console.log(" ### Ejercicio 1.c. Aumentar 2 cantidades en todos los productos.")
    console.log(productos.map(producto => producto.cantidad= producto.cantidad+2));
    console.log(productos);

    console.log("### Ejercicio 1.d. Imprimir solo los productoccs que pertenecen a la categoría computadora.");
    let computadoras = productos.filter(producto => producto.categoria === 'computadora');
    console.log(computadoras);

    console.log('### Ejercicio 1.e. Imprimir stock total.');
    let reducer = (acumulador,producto)  => acumulador+producto.cantidad;
    let total = productos.reduce(reducer,  0)
    // Reduce en una linea.
    let total2 = productos.reduce( (acumulador, producto) => acumulador+producto.cantidad, 0);
    console.log(total);
    console.log(total2);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p> Nombre: { alumno.nombre };  Apellido: {alumno.apellido} </p>
          <br/>

        <h4>Productos</h4>
        <ul>
          { 
            productos.map(producto => {
              return <li>{producto.nombre}</li>
            })
          }
        </ul>


          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
