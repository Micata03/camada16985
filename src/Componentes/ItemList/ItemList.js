import React, {useState, useEffect} from 'react'
import Item from '../Item/Item'
import Loading from '../Loading'

function ItemList({productos}) {

    const [loading, setLoading] = useState(true)

     useEffect(() =>{
        setTimeout(() =>{
            setLoading(false)
        }, 2000)

     }, [])   

    return (
        <div className="section-center">

            {loading? <Loading/> : productos.map (producto => <Item key={producto.id} producto ={producto}/> )}

            
            
            
        </div>
    )
}

export default ItemList
