import React, { useState } from "react";
// import { Form, Button } from "react-bootstrap";
import axios from "axios";
import '../components/css/contact.css'


const ContactForm = () => {
  const [state, setState] = useState({
    first_name: "",
    last_name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [result, setResult] = useState(null);

  const sendEmail = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/contactus/send", { ...state })
      .then((response) => {
        setResult(response.data);
        setState({
          first_name: "",
          last_name: "",
          email: "",
          subject: "",
          message: "",
        });
       
      })
      
      .catch((err) => {
        setResult(
          {
            success: false,
            message: "Something went wrong. Try again later",
          },
          console.log(err)
        );
      });
  };

  const onInputChange = (event) => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    <div>
      {result && (
        <p className={`${result.success ? "success" : "error"}`}>
          {result.message}
        </p>
      )}
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="well well-sm">
              <form onSubmit={sendEmail}>
                <fieldset>
                  <legend class="text-xs-center header">Contact us</legend>

                  <div class="form-group">
                    <span class="col-md-1 offset-md-2 text-xs-center">
                      <i class="fa fa-user bigicon "></i>
                    </span>
                    <div class="col-md-8">
                      <input
                        class="form-control"
                        type="text"
                        name="first_name"
                        value={state.first_name}
                        placeholder="Enter your first name"
                        onChange={onInputChange}
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <span class="col-md-2 offset-md-2 text-xs-center">
                      <i class="fa fa-user bigicon"></i>
                    </span>
                    <div class="col-md-8">
                      <input
                        class="form-control"
                        type="text"
                        name="last_name"
                        value={state.last_name}
                        placeholder="Enter your last name"
                        onChange={onInputChange}
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <span class="col-md-1 offset-md-2 text-xs-center">
                      <i class="fa fa-envelope-o bigicon"></i>
                    </span>
                    <div class="col-md-8">
                      <input
                        class="form-control"
                        type="text"
                        name="email"
                        value={state.email}
                        placeholder="Enter your email"
                        onChange={onInputChange}
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <span class="col-md-1 offset-md-2 text-xs-center">
                      <i class="fas fa-book-open bigicon"></i>
                    </span>
                    <div class="col-md-8">
                      <input
                        class="form-control"
                        type="text"
                        name="subject"
                        value={state.subject}
                        placeholder="Enter subject"
                        onChange={onInputChange}
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <span class="col-md-1 offset-md-2 text-xs-center">
                      <i class="fa fa-pencil-square-o bigicon"></i>
                    </span>
                    <div class="col-md-8">
                      <textarea
                        class="form-control"
                        as="textarea"
                        name="message"
                        value={state.message}
                        rows="3"
                        placeholder="Enter your message"
                        onChange={onInputChange}
                      ></textarea>
                    </div>
                  </div>
                  <div class="form-group">
                    <div className = "bb">
                      <button
                        
                        type="submit"
                        class="btn btn-primary btn-lg "
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
{/* 
      <form onSubmit={sendEmail}>
        <Form.Group controlId="first_name">
          <Form.Label>first name</Form.Label>
          <Form.Control
            type="text"
            name="first_name"
            value={state.first_name}
            placeholder="Enter your first name"
            onChange={onInputChange}
          />
        </Form.Group>
        <Form.Group controlId="last_name">
          <Form.Label>last name</Form.Label>
          <Form.Control
            type="text"
            name="last_name"
            value={state.last_name}
            placeholder="Enter your last name"
            onChange={onInputChange}
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            name="email"
            value={state.email}
            placeholder="Enter your email"
            onChange={onInputChange}
          />
        </Form.Group>
        <Form.Group controlId="subject">
          <Form.Label>subject</Form.Label>
          <Form.Control
            type="text"
            name="subject"
            value={state.subject}
            placeholder="Enter subject"
            onChange={onInputChange}
          />
        </Form.Group>
        <Form.Group controlId="message">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            value={state.message}
            rows="3"
            placeholder="Enter your message"
            onChange={onInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </form> */}
    </div>
  );
};
export default ContactForm;