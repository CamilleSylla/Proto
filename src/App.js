import logo from "./logo.svg";
import "./App.scss";
import Home from "./Componant/Pages/Home/Home";
import Nav from "./Componant/Elements/Nav/Nav";
import TestMenu from "./Componant/Layers/TestMenu.js/TestMenu";
import Services from "./Componant/Pages/Home/Services";
import { Route, Switch, useLocation } from "react-router-dom";
import Contact from "./Componant/Pages/Contact";
import Transition from "./Componant/Transition/Transition";
import { TransitionProvider } from "./Context/TransitionContext";
import Atelier from "./Componant/Pages/Atelier";
import Scene from "./Componant/Elements/Scene/Scene";

function App() {
  const location = useLocation;

  console.log(window.location.pathname);
  let goodScene;
  switch (window.location.pathname) {
    case "/" :
      goodScene = <Scene layerModel={"AstoBoy"}/>
      break;
    case "/services" :
      goodScene = <Scene layerModel={"Avatar"}/>
      break;
    case "/atelier":
      goodScene = <Scene layerModel={"Helmet"}/>
      break;
      default : 
      goodScene = null
  }


  return (
    <div className="App">
      <TransitionProvider>
        <TestMenu />
        <Nav />
        {goodScene}
        <Route
          render={({ location }) => (
            <Switch location={location} key={location.pathname}>
              <Route path="/" exact component={Home} />
              <Route path="/services" exact component={Services} />
              <Route path="/contact" exact component={Contact} />
              <Route path="/atelier" exact component={Atelier} />
            </Switch>
          )}
        />
      </TransitionProvider>
    </div>
  );
}

export default App;
