import { addDoc, collection, query, where, documentId, Timestamp ,writeBatch, getDocs, updateDoc} from 'firebase/firestore/lite'
import React, { useContext, useState } from 'react'
import { Navigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { CartContext } from '../Context/CartContext'
import { db } from '../firebase/config'


function CheckOut() {

    const {carrito, totalCompra, vaciarCarrito} = useContext(CartContext)
const [values, setValues] = useState({
        nombre: '',
        apellido: '',
        email: ''
    })
    

   
    

    const handleInputChange = (e) => {
        
        
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const orden  ={
                buyer:{
                ...values
            },
                items: carrito,
                total: totalCompra(),
                date: Timestamp.fromDate(new Date())
        }
        const batch= writeBatch(db)

        const orderRef = collection(db, "orders")
        const productosRef= collection(db, "productos")
        const q= query(productosRef, where(documentId(), 'in', carrito.map(el => el.id)))

        const outOfStock =[]
        const productos= await getDocs(q)
        productos.docs.forEach((doc)=>{
            const itemUpdate = carrito.find((prod)=> prod.id === doc.id)

            if(doc.data().stock >= itemUpdate.cantidad){
                batch.update(doc.ref, {
                    stock: doc.data().stock - itemUpdate.cantidad

                })
            }else{
                outOfStock.push(itemUpdate)
            }
        })
        if(outOfStock.length === 0){
            addDoc(orderRef, orden)
                        .then((res) => {
                            batch.commit()
                            Swal.fire({
                                icon: 'success',
                                title: 'Su orden se ingreso correctamente',
                                text: `Su numero de orden es: ${res.id}`
                            })
                            
                            vaciarCarrito() 
                        })
                       


            
        }else{
            Swal.fire({
                icon: 'error',
                title: 'no hay stock de:',
                text: outOfStock.map(el => el.name).join(',')

            })
        }

        


        

        
    }



    return (

        <>
            {carrito.length === 0 ? <Navigate to="/"/> : 
        <div className="container my-4">
            <h2>Resumen de compra</h2>
            <hr/>
            <form className="container m-5" onSubmit={handleSubmit}>
            <input
                onChange={handleInputChange}
                name="nombre"
                value={values.nombre}
                className="form-control my-2"
                type="text"
                placeholder="nombre"
            />
            {values.nombre.length < 4 && <small>Nombre inválido</small>}

            <input
                onChange={handleInputChange}
                name="apellido"
                value={values.apellido}
                className="form-control my-2"
                type="text"
                placeholder="apellido"
            />
            {values.apellido.length < 4 && <small>Apellido inválido</small>}

            <input
                onChange={handleInputChange}
                name="email"
                value={values.email}
                className="form-control my-2"
                type="email"
                placeholder="email"
            />
            {values.email.length < 4 && <small>Email inválido</small>}

            <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
            
        </div>}
        
        </>
    )
}

export default CheckOut