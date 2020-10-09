import React from "react";
<<<<<<< HEAD
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Makeup from "./components/pages/Makeup";
import Health from "./components/pages/Health";
import PersonalDevelopment from "./components/pages/Personal-Development";
import test from "./components/pages/test";
import "./login-style.scss";
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
        <Route path="/loginout" component={loginButton} />
        <Route path="/Login-Register" component={logoutButton} />
        <Route path="/contactus" component={contactus} />
        
       
      </Switch>
    </Router>
  );
=======
import reactDOM from "react-dom";
// import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
// import Login from "./components/Login";
// import Register from "./components/Register";
import LoginRegister from "./LoginAndRegister";


export default class App extends React.Component {
  render() {
    return (
      // <BrowserRouter>
      //   <div className="App">
      //     <Link to='/login'> Login</Link>
      //     <Link to='/register'>Register</Link>


      //     <Switch>
      //       <Route exact path='/login' component={Login} />
      //       <Route exact path='/register' render={() => <Register />} />
      //     </Switch>

      //   </div>
      // </BrowserRouter>

      <div>
        <LoginRegister/>
      </div>
    )
  }

>>>>>>> origin/Einav-the-Queen
}
export default App;
