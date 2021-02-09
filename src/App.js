import logo from './logo.svg';
import './App.scss';
import Home from './Componant/Pages/Home/Home';
import Nav from './Componant/Elements/Nav/Nav';
import TestMenu from './Componant/Layers/TestMenu.js/TestMenu';
import Services from './Componant/Pages/Home/Services';

function App() {
  return (
    <div className="App">
      <TestMenu/>
      <Nav/>
      <Services/>
    </div>
  );
}

export default App;
