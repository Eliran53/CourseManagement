import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ContactButton extends Component {
  render() {
    return (
        <div className="ContactButton">
        <li className="nav-item"><a className="nav-link js-scroll-trigger" ><Link to="#contact">Contact</Link></a></li>
        </div>
    );
  }
}