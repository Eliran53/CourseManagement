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
import Footer from "./components/footer";
import Home from "./components/pages/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
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
      </Switch>
      <Footer />
    </Router>
  );
}
export default App;
