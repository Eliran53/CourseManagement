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
    <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
                  <div className="container">
                  {/* <div class="md-form mt-0">
                  <input class="form-control" type="text" placeholder="Search" aria-label="Search"/>
                </div>        */}
                <a className="navbar-brand js-scroll-trigger" href="#page-top" >
                             <DropdownButton id="dropdown-basic-button" title="Categories"> 
                         <Dropdown.Item href="#/action-1">Health</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">Life style</Dropdown.Item>
                          <Dropdown.Item href="#/action-3">Makeup</Dropdown.Item>
                        </DropdownButton></a>

                        <div class="md-form mt-0">
                            <input class="form-control" type="text" placeholder="Search" aria-label="Search"/>
                          </div> 
                        
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto my-2 my-lg-0">
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">About</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#services">Preview</a></li>
                        {/* <li className="nav-item"> <a className="nav-link js-scroll-trigger" href="#portfolio">Categories</a></li> */}
                          {/* <DropdownButton id="dropdown-basic-button" title="Categories"> */}
                          {/* <Dropdown.Item href="#/action-1">Health</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">Life style</Dropdown.Item>
                          <Dropdown.Item href="#/action-3">Makeup</Dropdown.Item>
                        </DropdownButton> */}
                         
                        <li className="nav-item"><a class="nav-link js-scroll-trigger" href="#contact">Contact</a></li>
                        <li className="nav-item"> <a className="nav-link js-scroll-trigger" href="#portfolio">Login</a></li>
                        <li className="nav-item"> <a className="nav-link js-scroll-trigger" href="#registrar" >Sign up</a></li>

                    </ul>
                </div>
            </div>
        </nav>
        <header className="masthead">
            <div className="container h-100">
                <div className="row h-100 align-items-center justify-content-center text-center">
                    <div className="col-lg-10 align-self-end">
                        <h1 className="text-uppercase text-white font-weight-bold">Choose  your  next  lecture</h1>
                        <hr className="divider my-4" />
                    </div>
                    <div className="col-lg-8 align-self-baseline">
                        <p className="text-white-75 font-weight-light mb-5"><p>The purpose of the site is to connect between independent lecturers and you!</p> <p>We have a large selection of content on our site divided by categories.</p> 
                        <p>feel free to visit our site!</p>
                        </p>
                        <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">About Us</a>
                    </div>
                </div>
            </div>
        </header>
        <section className="page-section bg-primary" id="about">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                        <h2 className="text-white mt-0">About Us!</h2>
                        <hr className="divider light my-4" />
                        <h3 className="text-white-50 mb-4"><p>We are five software development students.</p>
                         <p>This site is our primary product.</p> 
                         <p>We have decided to develop a website that will meet your need to receive interesting and enriching content during the Corona!</p> 
                         <p> If you are an independent lecturer who wants to deliver lectures,</p> 
                          <p>contact us!</p> 
                         <p> have a nice time!!</p></h3>
                        <a className="btn btn-light btn-xl js-scroll-trigger" href="#services">Get Started!</a>
                    </div>
                </div>
            </div>
        </section>
        <div className="video">
          <section className="page-section" id="services">
            <div className="container">
             <h2 className="text-center mt-0">Lectures of your choice</h2>
                <div className="videofile"><VideoTitel/></div></div> </section> </div>
                {/* <hr className="divider my-4" /> */}
                {/* <div className="row">
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <i className="fas fa-4x fa-gem text-primary mb-4"></i>
                            <h3 className="h4 mb-2">Sturdy Themes</h3>
                            <p className="text-muted mb-0">Our themes are updated regularly to keep them bug free!</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <i className="fas fa-4x fa-laptop-code text-primary mb-4"></i>
                            <h3 className="h4 mb-2">Up to Date</h3>
                            <p className="text-muted mb-0">All dependencies are kept current to keep things fresh.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <i className="fas fa-4x fa-globe text-primary mb-4"></i>
                            <h3 className="h4 mb-2">Ready to Publish</h3>
                            <p className="text-muted mb-0">You can use this design as is, or you can make changes!</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <i className="fas fa-4x fa-heart text-primary mb-4"></i>
                            <h3 className="h4 mb-2">Made with Love</h3>
                            <p className="text-muted mb-0">Is it really open source if it's not made with love?</p>
                        </div>
                    </div>
               </div> */}
            
        
        {/* <div id="portfolio">
            <div className="container-fluid p-0">
                <div className="row no-gutters">
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href="assets/img/portfolio/fullsize/1.jpg">
                            <img className="img-fluid" src="assets/img/portfolio/thumbnails/1.jpg" alt="" />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Category</div>
                                <div className="project-name">Project Name</div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href="assets/img/portfolio/fullsize/2.jpg">
                            <img className="img-fluid" src="assets/img/portfolio/thumbnails/2.jpg" alt="" />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Category</div>
                                <div className="project-name">Project Name</div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href="assets/img/portfolio/fullsize/3.jpg">
                            <img className="img-fluid" src="assets/img/portfolio/thumbnails/3.jpg" alt="" />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Category</div>
                                <div className="project-name">Project Name</div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href="assets/img/portfolio/fullsize/4.jpg">
                            <img className="img-fluid" src="assets/img/portfolio/thumbnails/4.jpg" alt="" />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Category</div>
                                <div className="project-name">Project Name</div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href="assets/img/portfolio/fullsize/5.jpg">
                            <img className="img-fluid" src="assets/img/portfolio/thumbnails/5.jpg" alt="" />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Category</div>
                                <div className="project-name">Project Name</div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href="assets/img/portfolio/fullsize/6.jpg">
                            <img className="img-fluid" src="assets/img/portfolio/thumbnails/6.jpg" alt="" />
                            <div className="portfolio-box-caption p-3">
                                <div className="project-category text-white-50">Category</div>
                                <div className="project-name">Project Name</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div> */}
        {/* <section className="page-section bg-dark text-white">
            <div className="container text-center">
                <h2 className="mb-4">Free Download at Start Bootstrap!</h2>
                <a className="btn btn-light btn-xl" href="https://startbootstrap.com/themes/creative/">Download Now!</a>
            </div>
        </section> */}
        <section className="page-section" id="contact">
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
                </div>
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
            </div>
        </section>
        <footer className="bg-light py-5">
            <div className="container"><div className="small text-center text-muted">Copyright © 2020 - Get the lecture</div></div>
        </footer>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.bundle.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js"></script>
        <script src="js/scripts.js"></script>
  </div>
  

 

  )
} export default App;

 
