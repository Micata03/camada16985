
import './App.css';
import Footer from './Componentes/Footer/Footer';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import NavBar from './Componentes/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greetings ="Bienvenidos a mi Tienda"/>
      <Footer/>
    </div>
  );
}

export default App;
