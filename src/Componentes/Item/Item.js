import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './item.css'

function Item({producto}) {

    const {id, name, category, price, desc, img, stock} = producto
    return (
        <section >
       
        <div className="card menu-item" >
        <img src={img} class="card-img-top" alt={name}/>
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{desc}</p>
            <a href="#" className="btn btn-dark">Ver mas informacion</a>
            <p className="card-text"> Precio $ {price}</p>
            <small className="card-text">Stock: {stock}</small>
            <ItemCount stock={stock} inicial = {1} name={name}/>
            
        </div>

        </div>
        
        </section>
    )
}

export default Item
