import React from "react";
import "../../src/App.css";
import Navbar from '../components/Navbar1'
import Footer from '../components/pages/general/Footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../components/Home';
// import Navbar from '../components/pages/general/Navigation';
// import Header from '../homePage/Header';
// import About from '../homePage/About'
// import Video from '../homePage/Video';
// import ContactUs from '../contact/ContactUs';
// import LoginRegister from '../LoginAndRegister';
// import Categories from '../homePage/Categories';

export default function App() {
  return (

  <div className= "App">
     <Router>
      <Navbar />
      <Switch>
     <Route path = "/" exact component = {Home}/>
         {/* <Route path="/Login-Register" component={LoginRegister} />
        <Route path="/Categories" component={Categories} />
         <Route path="/Header" component={Header} />
         <Route path="/About" component={About} />
       <Route path="/loginout" component={logoutButton} />
        <Route exact path="/" component={Home} /> 
       <Route exact path="/Preview" component={Video} />
       <Route exact path="/Contact" component={ContactUs} />
      */}
      </Switch>
      <Footer />
    </Router>
{/*  
   <Navbar />   
    <Header/>
    <About/>
    <Video/>
   <ContactUs/> 
    <Footer />*/}
   


  </div>
  )
} 

 
