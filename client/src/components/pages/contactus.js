import React, { Component } from 'react';
import Header from '../contact/Header';
import ContactForm from '../contact/ContactForm';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './contactus.css';

class contactuss extends Component {
  render() {
    return (
      <div className="container">
        <div className="col-md-6 offset-md-3">
          <Header />
          <ContactForm />
        </div>
      </div>
    );
  }
}

export default contactuss;