//componente 
import React, { Component } from 'react'; //importa el componente base  de react

//usamos el estilo orientado a objetos, se puede hacer tambien usando solo funciones  y return
class suma extends Component {
  state = {

    nombre:  'andres',
    edad: "18",
    numero1 : 1,
    numero2 : 2,
    suma: (null)
    }  //atributos o estados de la clase
    


    //a partir de aqui van los metodos de la clase
    // constructor(){   
    //     super();
    // }
  
    SumoNumero  = ()=>{
           this.setState({suma:this.state.numero1 + this.state.numero2}) 
       }
  
    render() {
        
        return (
            // recuerde poner el div padre o contenedor 
            <div>
               <nav class="navbar bg-body-tertiary"><div class="container-fluid">
               
                </div>
              </nav>
               <span style={this.style} className='badge bg-secondary'>{" "} {this.state.nombre}</span> 
               <span style={this.style} className='badge bg-secondary'>{" "} {this.state.edad}</span>
               <button onClick={this.SumoNumero} className='btn btn-primary'> sumar</button>
               <span>{this.state.suma}</span>

               </div>               
        );
    }
}
export default suma;