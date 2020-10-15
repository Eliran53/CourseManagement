import React, { Component } from "react";
import { Link } from "react-router-dom";


export default class CustomLink extends Component {


  constructor(props){
    super(props);
    this.state = {
      path: '',
      selected : false,
    }

  }
  render() {
    return (
        <div className="{path}">
        <li className="nav-item"><a className="nav-link js-scroll-trigger"> <Link to="{path}">Categories</Link> </a></li>
        <li className="nav-item"><a className="nav-link js-scroll-trigger" ><Link to="{path}">Preview </Link></a></li>
        <li className="nav-item"><a className="nav-link js-scroll-trigger" ><Link to="{path}">About</Link></a></li>
        <input className="form-control" type="text" placeholder="Search" aria-label="Search"/>
        <li className="nav-item"><a className="nav-link js-scroll-trigger" ><Link to="{path}">Contact</Link></a></li>




        </div>
    );
  }
}