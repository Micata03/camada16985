import React, {useState} from 'react'

function ItemCount({inicial, stock, name}) {

    const [count, setCount] = useState(inicial)
    

    const add = () => {

        if(stock > count){
            setCount(count + 1) 
        }else{
            alert('No hay stock')
        }
    }    
    const rest = () => {
       
        if( count >1){
           setCount(count - 1) 
        }
        else{
            alert('Debes agregar al menos uno')
        }
    }        
    const onAdd =(cantidad)=>{
        alert(`Agregaste ${cantidad} de ${name} al carrito`)

    }
    
    return (
        <>
        <div className="container">
            <button className="btn btn-dark mx-3"  onClick={rest}
            //disabled={count === inicial? true : null}
            
            
            >-</button>
            <button className="btn btn-light">{count}</button>
            
            <button className="btn btn-dark mx-3"  onClick={add}
            //disabled={count === stock? true : null}
            
            >+</button>
            
        </div>
        <div className="container">
            <button className="btn btn-dark mt-2" onClick={()=> onAdd(count)}>Agregar al carrito</button>

        </div>
        </>
    )
}

export default ItemCount
