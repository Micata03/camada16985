import React, {useContext} from 'react'

import Mision from './Mision';
import Caracteristicas from './Caracteristicas';
import { MisionContext } from '../../Componentes/Context/MisionContext';


const Nosotros = () => {
    const {fotos, imgs} = useContext(MisionContext)

    
  return (

    <article className="section about-section">
        <h1 className="section-title">Nosotros</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum 
      </p>

      <Mision fotos={fotos}/>
      <Caracteristicas imgs={imgs}/>
     
          



      

</article>)
    


      
    
  
}

export default Nosotros