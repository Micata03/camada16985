import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'

import Loading from '../Loading';
import {useParams} from 'react-router-dom'
import {doc, getDoc} from 'firebase/firestore/lite';
import {db} from '../firebase/config'

function ItemDetailContainer() {

    const [item, setItem] = useState()
    const [loading, setLoading] = useState(false)

    const {prodId} = useParams()

     useEffect(()=>{
        setLoading(true)
        const docRef = doc(db, 'productos', prodId)
        getDoc(docRef)
        .then((doc)=>{
            setItem({
                id: doc.id,
                ...doc.data()
            })
        })
        .finally(()=>{
            setLoading(false)
        })
     },[prodId])   
    return (
        <div >
            {
                loading ? <Loading/> : <ItemDetail {...item}/>
            }
            
        </div>
    )
}

export default ItemDetailContainer