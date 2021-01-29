import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router , Switch ,Route} from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Titles from "./Titles";
import Pricing from "./Pricing";

function App() {
  return (
    <Router>
      <Navbar/>
        <Switch>
          <Route exact path ='/Home' component = {Home}/>
          <Route path = '/Titles' component = {Titles}/>
          <Route path = '/Pricing' component = {Pricing}/>
        </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
