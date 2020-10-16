import React from "react";
import "../../src/App.css";
import Navbar from '../components/Navbar1'
import Footer from '../components/pages/general/Footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../components/Home';


export default function App() {
  return (

  <div className= "App">
     <Router>
      <Navbar />
      <Switch>
     <Route path = "/" exact component = {Home}/>
   
      </Switch>
      <Footer />
    </Router>
  </div>
  )
} 

 
