import React, { useState } from 'react';


const Componentes = () => {


    const[contador,actualizarContador,r]=useState(5);

    //metodos o funciones
    
    //los hooks vienen incluidos en React , Nos permite trabajar sin clases
    
    
    let aumentar=()=>{
        // eslint-disable-next-line no-const-assign
        let dato=5;
        let r = 1;
        for(let i = dato; i>0; i--){
            r *= i;
        }
        return r;
    };

    
    
    let disminuir=()=>{
    actualizarContador(contador-1);
    };
    
    
    
    
        //renderizacion del componente
        return ( 
        <>
    
    <div className="row">
        <div className="col-6"><span className="badge bg-secondary">{r}</span></div>
        <div className="col-6"><button type="button"className='btn btn-primary'onClick={aumentar}> +</button>
        <button type="button"className='btn btn-primary'onClick={disminuir}>-</button></div>
    </div>




    
    
    
    </> );
}
 
export default Componentes;