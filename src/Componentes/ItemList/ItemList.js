import React, {useState, useEffect} from 'react'
import Item from '../Item/Item'
import Loading from '../Loading'


function ItemList({productos, id}) {

    const [loading, setLoading] = useState(true)
    const [producto, setProducto] = useState([])

     useEffect(() =>{
        setTimeout(() =>{
            setLoading(false)
            
        }, 2000)
        
        if(!id){
                setProducto(productos)
            }
            else{
                setProducto(productos.filter(prod=>prod.category === id))
            }

     }, [id])   


    return (
        <div className="section-center">

            {loading? <Loading/> : producto.map (producto => <Item key={producto.id} producto ={producto}/> )}

            
            
            
        </div>
    )
}

export default ItemList
