import React from 'react';
import Header from './Header';
import ContactForm from './ContactForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './contactus.css';

function contactus() {

    return (
      <div >
        <div>
          <Header />
          <ContactForm />
        </div>
      </div>
    );
  
}

export default contactus;