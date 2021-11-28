import React, { createContext, useState } from 'react'

export const CartContext = createContext()


export const CartProvider = ( {children} ) => {

    const [carrito, setCarrito] = useState([])
   

    const agregarAlCarrito = (item) => {
      setCarrito( [...carrito, item] )
    }

    console.log(carrito)

    
    const removerDelCarrito = (id) => {
      setCarrito( carrito.filter(prod => prod.id !== id ) )
    }
    const addCantidadProducto = (id) => {
             
      let x = carrito.findIndex(prod => prod.id === id )
      let newCart =[...carrito]
      
      newCart[x].cantidad < newCart[x].stock ? 
      newCart[x].cantidad = newCart[x].cantidad + 1 :
      alert('No hay stock');
    
        
      
      
      setCarrito(newCart)   
      
      
      
      
              
              } 

    const restCantidadProducto = (id) => {
             
      let x = carrito.findIndex(prod => prod.id === id )
      let newCart =[...carrito]
      
      newCart[x].cantidad > 0?
        newCart[x].cantidad = newCart[x].cantidad - 1:
        console.log('no se puede')
      setCarrito(newCart)
      
      
              
              } 
  
    const vaciarCarrito = () => {
      setCarrito([])
    }
  
    const totalCantidad = () => {
      return carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
    }

    const totalCompra = () => {

      let totales = carrito.reduce((acc, prod) => acc + prod.price * prod.cantidad, 0)
        
        
       return totales.toFixed(2);
    }
  
    const isInCart = (id) => {

        
      return carrito.some( prod => prod.id === id )
    }

    return (
        <CartContext.Provider value={{
            carrito,
            agregarAlCarrito,
            removerDelCarrito,
            vaciarCarrito,
            totalCantidad,
            isInCart,
            totalCompra,
            addCantidadProducto,
            restCantidadProducto
          
        }}>
            {children}
        </CartContext.Provider>
    )
}