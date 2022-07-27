import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Galery from './Pages/Galery';
import Contact from './Pages/Contact';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/About" component={About} />
      <Route exact path="/Galery" component={Galery} />
      <Route exact path="/Contact" component={Contact} />
    </Switch>
  );
}

export default App;
