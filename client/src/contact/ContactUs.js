import React, { Component } from "react";
import ContactUp from "./ContactUp";
import ContactForm from "./ContactForm";
// // import ContactUsFooter from "./ContactUsFooter";
// import 'bootstrap/dist/css/bootstrap.min.css';


export default class ContactUs extends Component {
  render() {
    return (
      <div>
        <ContactUp />
        <ContactForm />
        {/* <ContactUsFooter /> */}
      </div>
    );
  }
}