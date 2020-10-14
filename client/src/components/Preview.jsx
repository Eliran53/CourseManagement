import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Preview extends Component {
  render() {
    return (
        <div className="Preview">
        <li className="nav-item"><a className="nav-link js-scroll-trigger" ><Link to="#services">Preview </Link></a></li>
        </div>
    );
  }
}