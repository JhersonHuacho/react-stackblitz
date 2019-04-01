import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

// este es un componente funcional
function MiComponenteFuncional() {
  return <p>Hola Mundo "Mi componente funcional"</p>;
}

/** 
 * así como los componentes funcionales, existe su alternativa basada 
 * en clases de JS.
 * 
 * Ambos los componentes funcionales y de clases son las formas a travez
 * de las cuales podemos representar un componente.
 * 
 * Cada una de estas formas tienen sus PROS y sus CONTRAS. Ademas de sus
 * limitaciones.
*/

// para escribir un componente de clases tenemos que declarar la clase. 
// Y tiene que heredar de esta clase Component que estamos importando de la libreria de REACT.
/**
 * La principal caracteristica que distingue a un componente de clase es que tiene un metodo render()
 * que retorna lo que debe mostrar dicho componente o como se debe representar este componente dentro de la página web.
 */
class MiComponenteDeClase extends Component {
  render() {
    return <p>Hola soy de "Mi Componente de Clase"</p>;
  }
}

/**
 * Para utilizar cualquiera de estos 2 componentes, podemos utilizar el nombre de la función o de la clase.
 * Ejemplo: 
 * - < MiComponenteDeClase />
 * - < MiComponenteFuncional />
 * 
 */

// 02. PROPS

/**
 * Cada componente debe buscar ser su propio mundo y no debera usar información externa a el mismo.
 * 
 * Las PROPS en RAECT son las propiedades de creación del componente, es decir, información que establecemos para un componente cuando lo creamos.
 * Esta es la forma a travez de la cual un componente padre pasa información hacia los componentes hijos.
 * 
 * En resumen de las PROPS, toda la información que el componente necesita del exterior la tiene que recibir via PROPS.
 * Los PROPS son readonly, es decir, un componente no puede modificar sus propias PROPS, sola las puede leer.
 * Cuando el valor que se pasa via PROPS a un componente, se actualiza o se modifica. El componente se actualiza automaticamente.
 * 
 * Las PROPS es uno de los conceptos fundamentales del trabajo con REACT, porque es a travez de ellos que pasamos información de inicialización a nuestros componentes.
 */

// SIN PROPS
let nombreUno = "Francisco";

function A() {
  return <p>Hola A {nombreUno}</p>;
}
function B() {
  return <p>Hola B {nombreUno}</p>;
}
// con PROPS

function C(props) {
  return <p>Hola C {props.nombre}</p>;
}
function D(props) {
  return <p>Hola D {props.nombre}</p>;
}

// 03.JSX

/**
 * Para representar las interfaces de un componente utilizamos JSX, una extensión de JS que nos permite representar los elementos de REACT que vamos a crear usando una sintaxis similar a HTML.
 * En JSX creamos elementos de REACT colocando el nombre del componente dentro de <MiComponente />
 * Las llaves {} son los operadores que nos permiten especificar expresiones de JavaScript dentro de JSX, esto quiere decir que dentro de las llaves puedes colocar cualquier código de JavaScript valido.
 * Lo que sucede dentro de las llaves es que el código se evalua y si retorna algo, como en el caso de la expresión aritmetica {2+3+4} que retorna el resultado de ejecutar la operación, ese algo se insertara en este punto de la interfaz {}, es como imprimir.
 * Tambien podemos enviar funciones de JavaScript como PROPS hacia nuestro componentes.
 */
function E(props) {
  // y podemos acceder a ellos (en este caso al parrafo) a travez del arreglo children que esta dentro de las props
  //console.log(props.children);
  //return <p>Hola E {props.nombre}</p>;
  return props.children;
}

// 04. state
/** 
 * En REACT los componentes pueden guardar un estado interno para sus propiedades y las modificaciones que estas sufran, esto nos permite actualizar la información que el usuario nos mande, guardar datos que hayamos descargado,etc.
 * El estado es todo lo que puede sufrir una modificación dentro de un componente,
 * recuerda que dijimos que las PROPS no se pueden modificar, bueno,
 * cualquier cosa que si se pueda modificar es el estado del componente.
 */
/**
 * Tradicionalmente el estado de un componente esta relacionado con los
 * componentes de clase, ya que no fu si no hasta REACT 16.8 que acaba
 * de salir hace poco, que se introdujo una manera de conservar estado
 * en componentes funcionales.
 */

/**
 * el primer paso para guardar un estado, para que mi componente tenga
 * un estado es que tengo que inicializar  los valores iniciales del
 * estado dentro del constructor de nuestro componente.
 * 
 */
class Contador extends Component {
  constructor(props){
    super(props); // mandar los props al constructor del padre
    this.state = {
      contador : 0
    };
  }

aumentar = () => { 
  this.setState({
      contador : this.state.contador + 1
  }) 
}

  render(){
    return (
      <div>
        <p>{this.state.contador}</p>
        <button onClick={ this.aumentar }>Aumentar</button>
      </div>
    );
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }  

  render() {
    let nombreDos = "Jherson";
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
          <A />
          <B />
          <C nombre={nombreDos}/>
          <D nombre={nombreDos}/>
        </p>
        <div>
          <E nombre={nombreDos}>
            <p>Hola!!!!!</p>
            <p>Hola 2</p>
            <p>{2+3+4}</p>
          </E>
        </div>
        <div>
          <MiComponenteFuncional />
        </div>
        <div>
          <MiComponenteDeClase />
        </div>
        <div>
          <Contador />
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
