import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Makeup from "./components/pages/Makeup";
import Health from "./components/pages/Health";
import PersonalDevelopment from "./components/pages/Personal-Development";
import test from "./components/pages/test";
import "./login-style.scss";
import contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import loginButton from './components/loginbtn'
import logoutButton from './components/logoutbtn'
import contactus from './components/pages/contactus'


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path ="/Login-Register" component = {test}/>
        <Route path="/Makeup" component={Makeup} />
        <Route path="/Health" component={Health} />
        <Route path="/Personal-Development" component={PersonalDevelopment} />
        <Route path="/Contact" component={contact} />
        <Route path="/loginout" component={loginButton} />
        <Route path="/Login-Register" component={logoutButton} />
        <Route path="/contactus" component={contactus} />
        
       
      </Switch>
    </Router>
  );
}
export default App;
