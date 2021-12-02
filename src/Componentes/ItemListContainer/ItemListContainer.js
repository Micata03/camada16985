import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ItemList from '../ItemList/ItemList';
import { Link } from 'react-router-dom';
//import productos from '../../data';
import {collection, getDocs, query, where} from 'firebase/firestore/lite';
import {db} from '../firebase/config'
import Loading from '../Loading';

//const allCategories = [...new Set(productos.map(item =>item.category))];


export default function ItemListContainer() {

    const {catId} = useParams();
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(false)

 useEffect(()=>{
     setLoading(true)
     const productosRef = collection(db, 'productos')
     const q = catId? query(productosRef, where('category', '==', catId)) : productosRef
       
    

    getDocs(q)
        .then((collection)=>{
            const items = collection.docs.map((doc)=> ({
                id: doc.id,
                ...doc.data()
            }))
            console.log(items)
            setProductos(items)

        })
        .finally(()=>{
            setLoading(false)
        })
    },[catId])
    
    

    
    
    return (
        <section >
            <article className="hero-image">
            
            </article>
            <div className="btn-container">
            <Link to="productos/" className="filter-btn">Todos</Link>
            <Link to={`/productos/lacteos`} className="filter-btn">Lacteos</Link>
          <Link to={`/productos/frutas`} className="filter-btn">Frutas</Link>
          <Link to={`/productos/frutos secos`} className="filter-btn">frutos secos</Link>
        
          
             
        
        
        
      </div>

      {loading ? <Loading/> : <ItemList productos ={productos} id={catId}/>}
            
            
            
        </section>
    )
}
