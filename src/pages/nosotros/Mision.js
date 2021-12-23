import React from 'react'

function Mision({fotos}) {
    return (
        <div>
             <h2 className="section-title">Nuestra Mision:</h2>
     
     <section >
     
       
           <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
   <div className="carousel-inner">  
   <div className="carousel-item active ">
               <div className="hero-image"></div>
           
           </div>)
       {fotos.map((item)=> {
           const {img, alt, id} = item; 
           return(
             
           <div className="carousel-item "key={id}>
               <img src={img} alt={alt}  className="d-block w-100 "/>
           
           </div>)
       }
 
       )}
     </div> 
     
     
     
   
   <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
     <span className="visually-hidden">Previous</span>
   </button>
   <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
     <span className="carousel-control-next-icon" aria-hidden="true"></span>
     <span className="visually-hidden">Next</span>
   </button>
 </div>
 </section>
 
            
        </div>
    )
}

export default Mision