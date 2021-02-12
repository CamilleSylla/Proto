import logo from './logo.svg';
import './App.scss';
import Home from './Componant/Pages/Home/Home';
import Nav from './Componant/Elements/Nav/Nav';
import TestMenu from './Componant/Layers/TestMenu.js/TestMenu';
import Services from './Componant/Pages/Home/Services';
import { Route, Switch, useLocation } from 'react-router-dom';
import Contact from './Componant/Pages/Contact';

function App() {
  const location = useLocation
  return (
    <div className="App">
      <TestMenu/>
      <Nav/>
      <Route render={({ location }) => (  
        <Switch location={location} key={location.pathname}>
        <Route path="/" exact component={Home} />
        <Route path="/services" exact component={Services} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
      )} />
    </div>
  );
}

export default App;
