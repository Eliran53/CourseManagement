import React, { Component } from "react";
import "../../css/video.css";
import { Link } from "react-router-dom";
export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="bg-light py-1">
          <div className="py-2">
            <div className="small text-center text-muted">
              <Link to="/contactus">Contact Us</Link><br/>
              Copyright © 2020 - Get the lecture
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
