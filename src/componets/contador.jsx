//componente 
import React, { Component } from 'react'; //importa el componente base  de react

//usamos el estilo orientado a objetos, se puede hacer tambien usando solo funciones  y return
class Contador extends Component {
  state = {
    Contador: 10,
    nombre:  'juan perez',
    imagen: "https://picsum.photos/200"
    }  //atributos o estados de la clase
    
    style = {
        fontWeight: "bold",
        fontsize: 25,
    }
    //a partir de aqui van los metodos de la clase
    // constructor(){   
    //     super();
    // }
      incrementarContador  = ()=>{
      this.setState({Contador: this.state.Contador + 1})   
     }

     restarContador  = ()=>{
        this.setState({Contador: this.state.Contador - 1})  
       
       }
  

    render() {
        
        return (
            // recuerde poner el div padre o contenedor 
            <div>
               <span style={this.style} className='badge bg-secondary'>{" "} {this.state.Contador}</span> 
             <button onClick={this.incrementarContador} className="btn btn-primary">sumar</button>
             <button onClick={this.restarContador} className="btn btn-primary">restar</button>
             <img src={this.state.imagen} alt="imagen"/>
            </div>           
        );
    }
}
export default Contador;