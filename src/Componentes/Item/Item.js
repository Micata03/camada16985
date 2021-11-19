import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './item.css'
import {Link} from 'react-router-dom'

function Item({producto}) {

    const {id, name, category, price, desc, img, stock} = producto
    return (
        <section >
       
        <div className="card menu-item" >
        <img src={img} class="card-img-top" alt={name}/>
        <div className="card-body">
            <h5 className="card-title text-center">{name}</h5>
            <p className="card-text text-center">{desc}</p>
            <Link to={`/detail/${id}`} className="btn btn-dark">Ver mas informacion</Link>
            <p className="card-text text-center"> Precio $ {price}</p>
            <small className="card-text text-center">Stock: {stock}</small>
            <ItemCount stock={stock} inicial = {1} name={name}/>
            
        </div>

        </div>
        
        </section>
    )
}

export default Item
