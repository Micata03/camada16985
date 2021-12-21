import React, { useState } from 'react'


export const Formulario = ({submit, values, change}) => {

    
    
    return (
        <form className="container m-5 about-section" onSubmit={submit()}>
            <input
                onChange={change()}
                name="nombre"
                value={values.nombre}
                className="form-control my-2"
                type="text"
                placeholder="nombre"
            />
            {values.nombre.length < 4 && <small>Nombre inválido</small>}

            <input
                onChange={change()}
                name="apellido"
                value={values.apellido}
                className="form-control my-2"
                type="text"
                placeholder="apellido"
            />
            {values.apellido.length < 4 && <small>Apellido inválido</small>}

            <input
                onChange={change()}
                name="email"
                value={values.email}
                className="form-control my-2"
                type="email"
                placeholder="email"
            />
            {values.email.length < 4 && <small>Email inválido</small>}

            <button  className="btn btn-dark">Enviar</button>

        </form>
    )
}