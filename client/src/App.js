import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Makeup from "./components/pages/Makeup";
import Health from "./components/pages/Health";
import PersonalDevelopment from './components/pages/Personal-Development'
import "./login-style.scss";
import loginButton from './components/loginbtn'
import logoutButton from './components/logoutbtn'
import contactus from './components/pages/contactus'
import LoginRegister from "./LoginAndRegister";
import Footer from "./components/footer";
import Home from "./components/pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
         <Route path="/Login" component={LoginRegister} />
        <Route path="/Personal-Development" component = {PersonalDevelopment} />
        <Route path="/loginout" component={loginButton} />
        <Route path="/Login-Register" component={logoutButton} />
        <Route path="/contactus" component={contactus} />
        <Route exact path="/" component={Home} />
        <Route exact path="/Makeup" component={Makeup} />
        <Route exact path="/Health" component={Health} />
        <Route
          exact
          path="/Personal-Development"
          component={PersonalDevelopment}
        />
      </Switch>
      <Footer />
    </Router>
  )
}
export default App;