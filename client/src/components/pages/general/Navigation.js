import React from "react";
import '../../css/navbar1.css';
import {Dropdown}  from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { Nav, NavDropdown, Form ,FormControl, Button} from 'react-bootstrap'; 
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';




function Navbar1() {
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
                        <li className="nav-item"><a className="nav-link js-scroll-trigger"><Nav.Link href="#about">About</Nav.Link> </a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#services">Preview</a></li>
                       
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#contact">Contact</a></li>
                         <li className="nav-item"> <a className="nav-link js-scroll-trigger" href="#/registrar" >Sign up/Login</a></li>
                        {/* <Navbar bg="light" expand="lg"> */}
  {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar> */}

                    </ul>
                </div>
            </div>
        </nav>
       
      </>
    );
  }
  
  export default Navbar1;