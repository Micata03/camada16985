import { Formik } from 'formik'
import React, { useContext} from 'react'
import { CartContext } from '../Context/CartContext'
import * as Yup from 'yup';

import { generarOrden } from '../firebase/generarOrden'
import { Navigate } from 'react-router-dom';


const schema = Yup.object().shape({
    nombre: Yup.string()
                .required('Este campo es obligatorio')
                .min(3, 'demasiado corto')
                .max(20, 'demasiado largo'),
    apellido:   Yup.string()
                .required('Este campo es obligatorio')
                .min(3, 'demasiado corto')
                .max(20, 'demasiado largo'),  
    email: Yup.string()
                .email('Email invalido')
                .required('Este campo es obligatorio'),
              
                                      
})

function CheckOut() {

    const {carrito, totalCompra, vaciarCarrito} = useContext(CartContext)
    
    const initialValues = {
       nombre: '',
        apellido: '',
        email: '',
        
}
    

   
 


    return (

        <>
        {carrito.length === 0 ? <Navigate to="/"/> : 
        
        
        
        
        <div className="container my-4  mt-4  "style={{height:"60vh"}}>
            <h2>Resumen de compra</h2>
            <hr/>

            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values)=>{
                    generarOrden(values, carrito, totalCompra, vaciarCarrito)
                }}                
            
            >
                {(formik)=>(

                    <form className="container" onSubmit={formik.handleSubmit}>
            <input
                onChange={formik.handleChange}
                name="nombre"
                value={formik.values.name}
                className="form-control my-2"
                type="text"
                placeholder="nombre"
            />
           { formik.errors.nombre && <small>{formik.errors.nombre}</small>}

            <input
                onChange={formik.handleChange}
                name="apellido"
                value={formik.values.apellido}
                className="form-control my-2"
                type="text"
                placeholder="apellido" 
            />
            {formik.errors.apellido  && <small>{formik.errors.apellido} </small>}

            <input
                onChange={formik.handleChange}
                name="email"
                value={formik.values.email}
                className="form-control my-2"
                type="email"
                placeholder="email"
            />
            {formik.errors.email && <small>{formik.errors.email}</small>}
            

            <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
                )}

            </Formik>










            
            
        </div>}
        
        </>
    )
}

export default CheckOut