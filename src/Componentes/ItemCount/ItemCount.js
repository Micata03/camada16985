import React from 'react'



function ItemCount({max, id, setCantidad, cantidad, onAdd}) {

   

   
    

    const add = () => {

        if(cantidad < max){
            setCantidad(cantidad + 1);
            
           

        }

        
    }    
    const rest = () => {
       
        cantidad > 0 && setCantidad(cantidad - 1)
    }        
  
    
    return (
        <>
        <div className="container">
            <button className="btn btn-dark mx-3"  onClick={rest}
            //disabled={count === inicial? true : null}
            
            
            >-</button>
            <button className="btn btn-light">{cantidad}</button>
            
            <button className="btn btn-dark mx-3"  onClick={add}
            //disabled={count === stock? true : null}
            
            >+</button>
            
        </div>
        <div className="container">
            <button className="btn btn-dark mt-2" onClick={onAdd}>Agregar al carrito</button>

        </div>
        </>
    )
}

export default ItemCount
