import './App.css';
import logo from './logo.svg';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer  greeting={"Futura Tienda"}/>      
    </div>
  );
}

export default App;
