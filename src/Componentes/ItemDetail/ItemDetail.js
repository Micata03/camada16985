import React from 'react'
import {Link} from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'


function ItemDetail({id, name, category, price, desc, img, stock}) {

   

    return (
       <section className=" section item-section">
           
           <h2 className="section-title ">{name}</h2>
           <div className="item">
       <img src={img} alt={name}></img>
       <div className="item-info">
           <p>
           <span className="item-data">nombre: </span>{name}
           </p>
           <p>
           <span className="item-data">categoria: </span>{category}
           </p>
           <p>
           <span className="item-data">precio: $ </span>{price}
           </p>
           <p>
           <span className="item-data">stock: </span>{stock}
           </p>
           <p>
           <span className="item-data">Descripcion: </span>{desc}
           </p>
           
           </div>
             </div>
             
             <ItemCount stock={stock} inicial = {1} name={name}/>
             <Link to="/" className="btn btn-dark my-2 ">volver</Link>


       </section>
    )
}

export default ItemDetail