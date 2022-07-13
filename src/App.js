import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer  greeting={"Futura Tienda"}/>  
      <ItemDetailContainer/>    
    </div>
  );
}

export default App;
