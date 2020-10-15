import React from 'react'
import '../components/css/navbar1.css';
import Desing  from './design'
import {Link} from 'react-router-dom';

class Links extends React.Component {
    render() {
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
                       

                    </ul>
                </div>
            </div>
        </nav>
             <Desing>
           
                        <li className="nav-item"> <Link to="/" className="nav-link js-scroll-trigger">Catgoris</Link></li>
                        <li className="nav-item"><Link to="/students/data" className="nav-link js-scroll-trigger">preview</Link></li>
                         <li className="nav-item"> <a className="nav-link js-scroll-trigger" href="#/registrar" >Sign up/Login</a></li>
  
            
             
            
            <Link to="/students/edit" className="nav-link">Contact</Link>
            </Desing>
            </>
        )
    }
}
export default Links