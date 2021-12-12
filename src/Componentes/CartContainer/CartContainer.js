import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'
import { CartItem } from './CartItem'

export const CartContainer = () => {

    const {carrito, vaciarCarrito, totalCompra} = useContext(CartContext)
   

    if(carrito.length === 0){
        return (
            <section className='cart'>
              {/* cart header */}
              <header>
                <h2>Tu Carrito</h2>
                <h4 className='empty-cart'>Esta vacio</h4>
                <hr/>
                <Link to="/productos" className="  filter-btn ">Comprar</Link>
              </header>
            </section>
          )
    }

    return (
        <div className="cart">
            {/* cart header */}
      <header>
        <h2>Tu carrito</h2>
      </header>
      {/* cart items */}
      <div>
        {carrito.map((prod) => <CartItem {...prod}/>)}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            total: $: {totalCompra()}
          </h4>
        </div>
        
        <button
          className='btn btn-dark'
          onClick={vaciarCarrito}
        >
          vaciar carrito
        </button>
        <Link to="/checkout" className="btn btn-dark mx-3">Terminar mi compra </Link>
        
        <Link to="/productos" className=" nav-link">Seguir comprando</Link>
      </footer>
   
  
        </div>
    )
}