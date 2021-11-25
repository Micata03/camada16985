import React from 'react'

import './item.css'
import {Link} from 'react-router-dom'

function Item({producto}) {

    const {id, name, category, price, desc, img, stock} = producto
    return (
        <section >
       
        <div className="card " >
        <img src={img} class="card-img-top" alt={name}/>
        <div className="card-body text-center">
            <h5 className="card-title ">{name}</h5>
            <p className="card-text ">{desc}</p>
            
            <p className="card-text "> Precio $ {price}</p>
            <small className="card-text d-block ">Stock: {stock}</small>
            <Link to={`/detail/${id}`} className="btn btn-dark ">Ver mas informacion</Link>
            
        </div>

        </div>
        
        </section>
    )
}

export default Item
