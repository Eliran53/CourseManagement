import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Makeup from "./components/pages/Makeup";
import Health from "./components/pages/Health";
import PersonalDevelopment from "./components/pages/Personal-Development";
import test from "./components/pages/test";
import "./login-style.scss";
<<<<<<< HEAD
import loginButton from './components/loginbtn'
import logoutButton from './components/logoutbtn'
import contactus from './components/pages/contactus'
import LoginRegister from "./LoginAndRegister";

=======
import contact from "./components/pages/Contact";
import Footer from "./components/footer";
import Home from "./components/pages/Home";
>>>>>>> MuluWorks

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
<<<<<<< HEAD
        <Route path ="/Login-Register" component = {test}/>
        <Route path="/Makeup" component={Makeup} />
        <Route path="/Health" component={Health} />
        <Route path="/Login" component={LoginRegister} />
        <Route path="/Personal-Development" component={PersonalDevelopment} />
        <Route path="/loginout" component={loginButton} />
        <Route path="/Login-Register" component={logoutButton} />
        <Route path="/contactus" component={contactus} />
        
       
=======
        <Route exact path="/" component={Home} />
        <Route exact path="/Login-Register" component={test} />
        <Route exact path="/Makeup" component={Makeup} />
        <Route exact path="/Health" component={Health} />
        <Route
          exact
          path="/Personal-Development"
          component={PersonalDevelopment}
        />
        <Route exact path="/Contact-Us" component={contact} />
>>>>>>> MuluWorks
      </Switch>
      <Footer />
    </Router>
  )
}
export default App;