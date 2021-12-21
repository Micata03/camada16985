import {writeBatch, collection, addDoc, query, where, documentId, getDocs, Timestamp} from 'firebase/firestore/lite'
import Swal from 'sweetalert2'
import { db } from './config'




export const generarOrden = async(values, carrito, totalCompra, vaciarCarrito)=>{
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