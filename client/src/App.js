import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Makeup from "./components/pages/Makeup";
import Health from "./components/pages/Health";
import PersonalDevelopment from "./components/pages/Personal-Development";
import test from './components/pages/test';
import './login-style.scss';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path ="/Login-Register" component = {test}/>
        <Route path="/Makeup" component={Makeup} />
        <Route path="/Health" component={Health} />
        <Route path="/Personal-Development" component={PersonalDevelopment} />
       
      </Switch>
    </Router>
  );
}
export default App;

