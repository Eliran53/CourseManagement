import React from "react";
import "../../src/App.css";
import Navbar from "../components/Navbar";
import Footer from "../components/pages/general/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../components/Home";
import ContactUs from "../contact/ContactUs";
import Login from "../LoginRegisterBox";
import Signup from "../Register/index";
import Preview from "../homePage/Video";
import Sport from "../otherSite/Sport";
import queries from "../components/instructors/detlis";
import instructors from "../components/instructors/proinstructor";
import Add from "../components/instructors/Add";

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
          <Route path="/:sport" exact component={Sport} />
          <Route path="/api/instructors/:id" exact component={instructors} />
          <Route path="/api/queries/:id" exact component={queries} />
          <Route path="/add" exact component={Add} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
