
import './App.css';
import Footer from './Componentes/Footer/Footer';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import NavBar from './Componentes/NavBar';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './Componentes/Context/CartContext';
import { CartContainer } from './Componentes/CartContainer/CartContainer';
import Nosotros from './Componentes/Nosotros';

function App() {
  return (

    <CartProvider>
     <BrowserRouter className="container">
        <NavBar/>
      <Routes> 

        <Route path="/" element={<ItemListContainer greetings ="Bienvenidos a mi Tienda"/>}/>
        <Route path="/productos/:catId" element={<ItemListContainer/>}/>
        <Route path="detail/:prodId" element={<ItemDetailContainer />}/>
        <Route path="*" element={<Navigate to ="/"/>}/>
        <Route path="/cart" element={<CartContainer/>}/>
        <Route path="/nosotros" element={<Nosotros/>}/>

    
      
      


      </Routes> 

      <Footer/>
      
    
    
    
    
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
