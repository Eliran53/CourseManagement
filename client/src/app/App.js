import React from "react";
import "../../src/App.css";
import Navbar from "../components/Navbar";
import Footer from "../components/pages/general/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../components/Home";
import ContactUs from "../contact/ContactUs";
import Login  from '../Login/index'
import Signup  from '../Register/index'
import Preview from '../homePage/Video'


export default function App() {
  return (

    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contactUs" exact component={ContactUs} />
          <Route path="/Login" exact component={Login} />
          <Route path="/Signup" exact component={Signup} />
          <Route path="/Preview" exact component={Preview} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
