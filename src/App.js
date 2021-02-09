import logo from './logo.svg';
import './App.scss';
import Home from './Componant/Pages/Home/Home';
import Nav from './Componant/Elements/Nav/Nav';
import Menu from './Componant/Layers/Menu/Menu';
import Hamburger from './Componant/Layers/Hamburger/Hamburger';
import TestMenu from './Componant/Layers/TestMenu.js/TestMenu';

function App() {
  return (
    <div className="App">
      <TestMenu/>
      <Nav/>
      <Home/>
    </div>
  );
}

export default App;
