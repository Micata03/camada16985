import React, {useContext} from 'react'
import { CartContext } from '../Context/CartContext'
import './CartWidget.css'
import {FaShoppingCart} from 'react-icons/fa'




export default function CartWidget() {
    const {totalCantidad} = useContext(CartContext)

    return (
      <div className="cartWidget">

          
            <FaShoppingCart/>
                    <span >{totalCantidad()}</span>

         
            
           
       </div>     
       
    )
}
