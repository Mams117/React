import React, { useState } from 'react';



const ContadorFn = () => {

//variables : Hook state
const[contador,actualizarContador]=useState(0);

//metodos o funciones

//los hooks vienen incluidos en React , Nos permite trabajar sin clases


let aumentar=()=>{
actualizarContador(contador+1);
};

let disminuir=()=>{
actualizarContador(contador-1);
};




    //renderizacion del componente
    return ( 
    <>

<div className="row">
    <div className="col-6"><span className="badge bg-secondary">{contador}</span></div>
    <div className="col-6"><button type="button"className='btn btn-primary'onClick={aumentar}> +</button>
    <button type="button"className='btn btn-primary'onClick={disminuir}>-</button></div>
</div>
<div className="row">
  
<div class="card" >
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="" class="btn btn-secondary">Enviar</a>
  </div>
</div>

</div>

</> );
};
 
export default ContadorFn;