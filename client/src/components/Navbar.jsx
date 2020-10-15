import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import '../components/css/navbar1.css';
import Categories from './Categories';
import Preview from './CustomLink';
import ContactButton from './ContactButton';
import Search from './Search';
import About from './About';
import ContactUs from '../contact/ContactUs';
import { Link } from "react-router-dom";
import Video from '../homePage/Video'

export default class Navbar extends Component {
  links = [
    {path : 'Categories', selected : false },
    {path : 'Preview', selected : false },
    {path : 'About', selected : false },
    {path : 'Contact', selected : false },
  
     
  ];
  constructor(props){
    super(props);
    this.state = {
      links: this.links
    }

  }
  render() {
    return (
        <div className="Navbar">
            <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
                  <div className="container">
                  <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                  <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto my-2 my-lg-0">

                   
                    </ul>
                    </div>

                  </div>
            </nav>
        
        </div>
    );
  }
}