import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./css/Form.css";
export class footer extends Component {
  render() {
    return (
        <div className="footer">
        <Link to="/Contact-Us" className="cont">
        Contact Us
         
        </Link>
      </div>
    );
  }
}

export default footer;
