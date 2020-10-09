import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./css/Form.css";
export class footer extends Component {
  render() {
    return (
      <div className="footer">
        <Link to="/contactus" className="cont">
          Contact Us
        </Link>
      </div>
    );
  }
}

export default footer;
