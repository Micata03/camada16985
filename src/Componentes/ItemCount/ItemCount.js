import React, {useState} from 'react'

function ItemCount({inicial, stock, name}) {

    const [count, setCount] = useState(inicial)
    

    const add =(cantidad)=>{
        setCount(count + cantidad)
            
        
       

    }
    const rest =(cantidad)=>{
        setCount(count - cantidad)      
             
       

    }

    const onAdd =(cantidad)=>{
        alert(`Agregaste ${cantidad} de ${name} al carrito`)

    }
    
    return (
        <>
        <div className="container">
            <button className="btn btn-dark mx-3"  onClick={() => rest(1)}
            disabled={count === inicial? true : null}
            
            
            >-</button>
            <button className="btn btn-light">{count}</button>
            
            <button className="btn btn-dark mx-3"  onClick={() => add(1)}
            disabled={count === stock? true : null}
            
            >+</button>
            
        </div>
        <div className="container">
            <button className="btn btn-dark mt-2" onClick={()=> onAdd(count)}>Agregar al carrito</button>

        </div>
        </>
    )
}

export default ItemCount
