import React, {useState, useEffect} from 'react'
import Item from '../Item/Item'
import Loading from '../Loading'






function ItemList({productos, id}) {

    

    return (
        <section>
           
        <div className="section-center">
            
            { productos.map (producto => <Item key={producto.id} producto={producto} /> )}

            
            
            
        </div>
        </section>

    )}
     
    
   

export default ItemList
