import logo from './logo.svg';
import './App.scss';
import Home from './Componant/Pages/Home/Home';
import Nav from './Componant/Elements/Nav/Nav';
import Menu from './Componant/Layers/Menu/Menu';

function App() {
  return (
    <div className="App">
      <Menu/>
      <Home/>
    </div>
  );
}

export default App;
