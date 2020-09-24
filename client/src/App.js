import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Makeup from "./components/pages/Makeup";
import Health from "./components/pages/Health";
import PersonalDevelopment from "./components/pages/Personal-Development";
import Register from "./components/pages/Register";


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/Makeup" component={Makeup} />
        <Route path="/Health" component={Health} />
        <Route path="/Personal-Development" component={PersonalDevelopment} />
        <Route path="/Register" component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
