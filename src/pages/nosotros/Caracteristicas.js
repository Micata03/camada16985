import React from 'react'


function Caracteristicas({imgs}) {
    return (
        <section className="container">
             <h2 className="section-title">Nuestros Productos son:</h2>
     
        <div className="thumbnails-grid">
       {imgs.map((item)=> {
           const {img, alt, id} = item; 
           return(
             
           
               <img src={img} alt={alt} key={id} className="thumbnails" />
           
           )
       }
 
       )}
       </div>
     </section> 
     
     
     
   
     
 
    )
}

export default Caracteristicas