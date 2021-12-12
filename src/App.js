
import './App.css';
import Footer from './Componentes/Footer/Footer';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import NavBar from './Componentes/NavBar';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './Componentes/Context/CartContext';
import { CartContainer } from './Componentes/CartContainer/CartContainer';
import Nosotros from './pages/nosotros/Nosotros';
import { AppProvider } from './Componentes/Context/SideCartContext';
import SideCart from './Componentes/SideCart/SideCart'
import { MisionProvider } from './Componentes/Context/MisionContext';
import CheckOut from './Componentes/checkout/CheckOut';

function App() {
  return (

    <CartProvider>
      <AppProvider>
        <MisionProvider>
     
     <BrowserRouter className="container">
        <NavBar/>
      <Routes> 

        <Route path="/" element={<ItemListContainer greetings ="Bienvenidos a mi Tienda"/>}/>
        <Route path="/productos/:catId" element={<ItemListContainer/>}/>
        <Route path="detail/:prodId" element={<ItemDetailContainer />}/>
        <Route path="*" element={<Navigate to ="/"/>}/>
        <Route path="/cart" element={<CartContainer/>}/>
        <Route path="/nosotros" element={<Nosotros/>}/>
        <Route path="/checkout" element={<CheckOut/>}/>

    
      
      


      </Routes> 
      <SideCart/>

      <Footer/>
      
    
    
    
    
    </BrowserRouter>
    </MisionProvider>
    </AppProvider>
    </CartProvider>
  );
}

export default App;
