import React from 'react'
import {useParams} from 'react-router-dom'
import ItemList from '../ItemList/ItemList';
import { Link } from 'react-router-dom';
import productos from '../../data';


const allCategories = [...new Set(productos.map(item =>item.category))];


export default function ItemListContainer({greetings}) {
    const {catId} = useParams();
    
    

    
    
    return (
        <section >
            <article className="hero-image">
            
            </article>
            <div className="btn-container">
            <Link to="productos/" className="filter-btn">Todos</Link>
        
       {allCategories.map((item)=>{
         return (
          <Link to={`/productos/${item}`} className="filter-btn">{item}</Link>
        )
       })}   
             
        
        
        
      </div>
            
            <ItemList productos ={productos} id={catId}/>
            
        </section>
    )
}
