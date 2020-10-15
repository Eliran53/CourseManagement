import React from "react";
import "../components/css/navbar1.css";
import {Link} from 'react-router-dom'

class Links extends React.Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
                  <div className="container">
                 
                <div className="navbar-brand js-scroll-trigger" href="#page-top" >
                       </div>
                     <div className="md-form mt-0">
                            <input className="form-control" type="text" placeholder="Search" aria-label="Search"/>
                          </div> 
               <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
               <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto my-2 my-lg-0">
                        <li className="nav-item"><Link to="/" className="nav-link js-scroll-trigger">Catgoris</Link></li>
                        <li className="nav-item"><Link to="/Preview" className="nav-link js-scroll-trigger">preview</Link></li>
                        <li className="nav-item"> <Link to="/contactUs" className="nav-link js-scroll-trigger">Contact</Link></li>
                        <li className="nav-item"> <Link to="/Login" className="nav-link js-scroll-trigger">Login</Link></li>
                        <li className="nav-item"> <Link to="/Signup" className="nav-link js-scroll-trigger">Sign up</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
  }
}
export default Links;