import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class About extends Component {
  render() {
    return (
        <div className="About">
        <li className="nav-item"><a className="nav-link js-scroll-trigger" ><Link to="/About">About</Link></a></li>
        </div>
    );
  }
}