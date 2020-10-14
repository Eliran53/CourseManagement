import React from "react";
import "../../src/App.css";
// import Navbar from '../components/pages/general/Navigation';
import Navbar from '../components/Navbar'
import Header from '../homePage/Header';
import About from '../homePage/About'
import Video from '../homePage/Video';
import ContactUs from '../contact/ContactUs';
import Footer from '../components/pages/general/Footer';



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

 
