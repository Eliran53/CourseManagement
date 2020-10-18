import React, { Component } from "react";
import Profile from "./detlis";
import Proinstructor from "./proinstructor";

export class profileinstructor extends Component {
  render() {
    return (
      
        <section className="page-section" id="contact">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 text-center float-left">
                <Proinstructor />
                </div>
                <div className="col-lg-6 text-center float-right ">
                  <Profile />
                </div>
            </div>
          </div>
        </section>
     
    );
  }
}

export default profileinstructor;
