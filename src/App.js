
import './App.css';
import Footer from './Componentes/Footer/Footer';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import NavBar from './Componentes/NavBar';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
     <BrowserRouter className="container">
        <NavBar/>
      <Routes> 

        <Route path="/" element={<ItemListContainer greetings ="Bienvenidos a mi Tienda"/>}/>
        <Route path="/productos/:catId" element={<ItemListContainer/>}/>
        <Route path="detail/:prodId" element={<ItemDetailContainer />}/>
        <Route path="*" element={<Navigate to ="/"/>}/>

    
      
      


      </Routes> 

      <Footer/>
    
    
    
    
    </BrowserRouter>
  );
}

export default App;
