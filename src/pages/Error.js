import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
   <section className="error-page ">
     <dic className="error-container">
       <h1>opps! it´s a dead end</h1>
       <Link to="/" className="btn btn-dark">back home</Link>
     </dic>
   </section>
  )
}

export default Error