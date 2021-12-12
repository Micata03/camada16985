import React, {useContext, useState, useEffect, createContext} from "react";
import {docs, getDocs, collection} from 'firebase/firestore/lite';
import {db} from '../../Componentes/firebase/config'

export const MisionContext = createContext()

export const MisionProvider = ({children})=>{

    const [fotos, setFotos] = useState([])
    const [imgs, setImgs] = useState([])

    useEffect(()=>{
        const imgRef = collection(db, 'carousel')
        const productosRef = collection(db, 'caracteristicas')

          
       
   
       getDocs(imgRef)
           .then((collection)=>{
               const items = collection.docs.map((doc)=> ({
                   id: doc.id,
                   ...doc.data()
               }))
               console.log(items)
               setFotos(items)

   
           })

        getDocs(productosRef)
            .then((collection)=>{
                const pictures = collection.docs.map((doc)=>({
                    id: doc.id,
                    ...doc.data()
                }))
                setImgs(pictures)
            })   
       },[])

       return (

        <MisionContext.Provider value={{
            fotos, 
            imgs,
        }}>
            {children}

        </MisionContext.Provider>
       )
           
       
}