import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

export default function ItemListContainer({greetings}) {
    return (
        <div>
            <h1>{greetings}</h1>
            <ItemCount stock={4} inicial = {1}/>
        </div>
    )
}
