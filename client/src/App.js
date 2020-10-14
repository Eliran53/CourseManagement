import React from "react";
import "./App.css";
import Navbar from './components/pages/general/Navigation';
import Header from './components/pages/homePage/Header';
import About from './components/pages/homePage/About'
import Video from './components/pages/homePage/Video';
import ContactUs from './components/pages/contact/ContactUs';
import Footer from './components/pages/general/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';//???


export default function App() {
  return (

  <div className= "App">
    <Navbar/>
    <Header/>
    <About/>
    <Video/>
    <ContactUs/>
    <Footer/>
 
  </div>
  

 


  )
} 

 
