import React from "react";
import "./App.css";
import ContactForm from './components/contact/ContactForm';
import VideoTitel from '../src/components/homePage/VideoTitel';
import Dropdown from './components/general/Dropdown';
import { DropdownButton } from 'react-bootstrap';
import {Button1 } from './components/general/Button';


function App() {
  return (

  <div className= "App">
    <Navbar/>
    <Header/>
    <About/>
    <Video/>
    <ContactUs/>
 
        {/* <section className="page-section" id="contact">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                        <h2 className="mt-0">Let's Get In Touch!</h2>
                        <hr className="divider my-4" />
                        <p className="text-muted mb-5">Give us a call or send us an email and we will get back to you as soon as possible!</p>
                    </div>
                </div>
                <div>
                <ContactForm />
                <div className="row">
        <div className="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
         <i className="fas fa-phone fa-3x mb-3 text-muted"></i>
            <div>+1 (555) 123-4567</div>
            </div>
              <div className="col-lg-4 mr-auto text-center">
                <i className="fas fa-envelope fa-3x mb-3 text-muted"></i>
                <a className="d-block" href="mailto:contact@yourwebsite.com">lecture867@gmail.com</a>
                 </div>
                </div>
        </section> */}
       
        <footer className="bg-light py-5">
            <div className="container"><div className="small text-center text-muted">Copyright © 2020 - Get the lecture</div></div>
        </footer>
        {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.bundle.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js"></script>
        <script src="js/scripts.js"></script> */}
  </div>
  

 


  )
} export default App;

 
