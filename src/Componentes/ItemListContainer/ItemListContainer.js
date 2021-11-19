import React from 'react'
import {useParams} from 'react-router-dom'
import ItemList from '../ItemList/ItemList';


import productos from '../../data';


export default function ItemListContainer({greetings}) {
    const {catId} = useParams();
    
    return (
        <div >
            <article className="hero-image">
            
            </article>
            <h1 className="hero-text">{greetings}</h1>
            <ItemList productos ={productos} id={catId}/>
            
        </div>
    )
}
