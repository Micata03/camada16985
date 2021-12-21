import React, {useContext, useState} from 'react'
import {Link} from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import {CartContext}  from '../Context/CartContext'
import {useGlobalContext} from '../Context/SideCartContext'

function ItemDetail({id, name, category, price, desc, img, stock}) {

    const {agregarAlCarrito, isInCart} = useContext(CartContext)
    const { openSidebar } = useGlobalContext();

    const [cantidad, setCantidad] = useState(0)

    const handleAgregar = () => {
        if (cantidad > 0) {
            agregarAlCarrito({
                id,
                name,
                price,
                img,
                cantidad,
                stock
            })
            openSidebar()
            
        }   
    }

    return (
       <section className=" section item-section">
           
           <h2 className="section-title ">{name}</h2>
           <div className="item">
       <img src={img} alt={name}></img>
       <div className="item-info">
           <p>
           <span className="item-data">nombre: </span>{name}
           </p>
           <p>
           <span className="item-data">categoria: </span>{category}
           </p>
           <p>
           <span className="item-data">precio: $ </span>{price}
           </p>
           <p>
           <span className="item-data">stock: </span>{stock}
           </p>
           <p>
           <span className="item-data">Descripcion: </span>{desc}
           </p>
           
           </div>
             </div>
             
             {
                !isInCart(id)
                    ?   <ItemCount 
                            max={stock} 
                            cantidad={cantidad} 
                            setCantidad={setCantidad}
                            onAdd={handleAgregar}
                            id={id}
                        />
                    :   <Link to="/cart" className="btn btn-dark ">Terminar mi compra</Link>
            }

             <Link to="/" className="btn btn-dark mx-2 my-2 ">volver</Link>


       </section>
    )
}

export default ItemDetail