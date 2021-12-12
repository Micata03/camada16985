import React, {useContext} from 'react'
import { CartContext } from '../Context/CartContext'
import './CartWidget.css'
import {FaShoppingCart} from 'react-icons/fa'




export default function CartWidget({boton}) {
  const {totalCantidad, carrito} = useContext(CartContext)
 
   const open = ()=>{
     if(window.location.href !== 'http://localhost:3000/cart' ){
       boton()
     }
   }


  return (
    <div className={carrito.length === 0?'hidden widget' : 'widget'}>

        <button className="filter-btn-cart"onClick={open}
       
        >
          <FaShoppingCart ></FaShoppingCart>
          <small>Mi carrito</small>
          <span >({totalCantidad()})</span>
        </button>
          
         
         
     </div>     
     
  )
}
