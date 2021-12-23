import React, {useContext} from 'react'
import { BsFillTrashFill } from 'react-icons/bs'
import { CartContext } from '../Context/CartContext'


export const CartItem = ({name, img, id, price,  cantidad}) => {
    
    
  const { removerDelCarrito, addCantidadProducto, restCantidadProducto} = useContext(CartContext)
   
 

    return (
        <article className='cart-item'>
        <img src={img} alt={name} />
        <div>
          <h4>{name}</h4>
          <h4 className='item-price'>$ {price}</h4>
          
          
        
          <button
            className='remove-btn'
            onClick={()=> removerDelCarrito(id)}
          >
            <BsFillTrashFill/>
          </button>
        </div>
        <div>
        
        <button className='amount-btn' onClick={()=>addCantidadProducto(id)} >
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
            <path d='M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z' />
          </svg>
        </button>
        
        <p className='amount'>{cantidad}</p>
      
        <button className='amount-btn'onClick={()=>restCantidadProducto(id)}>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
            <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
          </svg>
        </button>
      </div>
        </article>
    )
}