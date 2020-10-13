import React from "react";
import '../css/navbar1.css';
import {Dropdown}  from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';



function Navbar() {
    //
    // const [click, setClick] = useState(false);
    // const [dropdown, setDropdown] = useState(false);
  
    // const handleClick = () => setClick(!click);
    // const closeMobileMenu = () => setClick(false);
  
    // const onMouseEnter = () => {
    //   if (window.innerWidth < 960) {
    //     setDropdown(false);
    //   } else {
    //     setDropdown(true);
    //   }
    // };
  
    // const onMouseLeave = () => {
    //   if (window.innerWidth < 960) {
    //     setDropdown(false);
    //   } else {
    //     setDropdown(false);
    //   }
    // };
  
    return (
      <>
      
      <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
                  <div className="container">
                 
                <a className="navbar-brand js-scroll-trigger" href="#page-top" >
                             <DropdownButton id="dropdown-basic-button" title="Categories"> 
                         <Dropdown.Item href="#/action-1">Health</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">Life style</Dropdown.Item>
                          <Dropdown.Item href="#/action-3">Makeup</Dropdown.Item>
                        </DropdownButton></a>

                        <div className="md-form mt-0">
                            <input className="form-control" type="text" placeholder="Search" aria-label="Search"/>
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
                         
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#contact">Contact</a></li>
                        <li className="nav-item"> <a className="nav-link js-scroll-trigger" href="#portfolio">Login</a></li>
                        <li className="nav-item"> <a className="nav-link js-scroll-trigger" href="#registrar" >Sign up</a></li>

                    </ul>
                </div>
            </div>
        </nav>
       
      </>
    );
  }
  
  export default Navbar;