import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Categories extends Component {
  render() {
    return (
      
      <div className="Categories">
       <li className="nav-item"><a className="nav-link js-scroll-trigger"> <Link to="/Categories">Categories</Link> </a></li>
       </div>
    );
  }
}

