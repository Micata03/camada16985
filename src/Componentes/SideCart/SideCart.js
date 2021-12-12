import React, { useContext }  from 'react';

import {useGlobalContext} from '../Context/SideCartContext'
import { FaTimes } from 'react-icons/fa';
import { CartContext } from '../Context/CartContext'
import { Link } from 'react-router-dom';
import {FaShoppingCart} from 'react-icons/fa'




const SideCart = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  const {carrito,  totalCompra} = useContext(CartContext)
 


  return (
    <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
      <div className='sidebar-header'>
        <h3>Tu Carrito</h3>
        <button className='close-btn' onClick={closeSidebar}>
          <FaTimes />
          
        </button>
        </div>
        {carrito.map((prod)=>{
            const {price, name, img, cantidad} = prod
            return(
            <aside className="aside-cart">
            <img src={img} alt={name}/>
            
            <h5>{name}</h5>
            <h5>$ {price}</h5>
            <h5>Cant.{cantidad}</h5>
            
            
        </aside>)

            
        })}
        <div className='cart-total'>
            <hr/>
          <h4>
            total: $: {totalCompra()}
          </h4>
          <Link to="/cart" className="filter-btn " onClick={closeSidebar}>
            <FaShoppingCart className="mx-2"/>
            Finalizar Compra
            </Link>
        </div>
        
        
        
     
      
    </aside>
  );
};

export default SideCart;
