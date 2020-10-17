import React, { Component } from "react";
import Profile from "./detlis";
import Proinstructor from "./proinstructor";

export class profileinstructor extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">
          <Proinstructor />
          </div>
          <div className="col-6 float-right">
          <Profile />
          </div>
        </div>
      </div>
    );
  }
}

export default profileinstructor;
