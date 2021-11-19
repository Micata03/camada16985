import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import productos from '../../data';
import Loading from '../Loading';
import {useParams} from 'react-router-dom'

function ItemDetailContainer() {

    const [item, setItem] = useState()
    const [loading, setLoading] = useState(false)

    const {prodId} = useParams()

     useEffect(()=>{
         setLoading(true)
        setItem(productos.find(prod => prod.id === Number(prodId) ))
        setLoading(false)
     },[])   
    return (
        <div>
            {
                loading ? <Loading/> : <ItemDetail {...item}/>
            }
            
        </div>
    )
}

export default ItemDetailContainer