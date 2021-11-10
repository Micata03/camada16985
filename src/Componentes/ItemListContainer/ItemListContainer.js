import React from 'react'

import ItemList from '../ItemList/ItemList'
import productos from '../../data';

export default function ItemListContainer({greetings}) {

    
    return (
        <div >
            <article className="hero-image">
            
            </article>
            <h1 className="hero-text">{greetings}</h1>
            <ItemList productos ={productos}/>
            
        </div>
    )
}
