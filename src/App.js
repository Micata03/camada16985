
import './App.css';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import NavBar from './Componentes/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greetings ="Bienvenidos a mi Tienda"/>
    </div>
  );
}

export default App;
