import React from 'react'
import cart from './carrito-de-compras.png'
import './CartWidget.css'



export default function CartWidget() {

    return (
        <>
            
            <img src={cart} alt="carrito" className="logo-carrito" />
            
        </>
    )
}
