import React from "react";
import axios from 'axios';
import history from './history';

class LoginBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };

  }



  osubmitLogin(e) {
    console.log("Hello world!");
    axios
      .post('api/auth/signin', {
        email: this.state.email,
        password: this.state.password,

      })
      .then(res => {
        
        if (res.status === 200) {
          console.log('signIn!!!');
          history.push('/')
          window.location.reload()

        }

      }).catch((error) => {
        // this.props.onError();
        console.log(error)
      })
  }



  render() {
    return (
      <div className="inner-container">
        <div className="header">
          Login
          </div>
        <div className="box">

          <div className="input-group">
            <label htmlFor="Email">Email</label>
            <input
              type="text"
              name="Email"
              className="login-input"
              placeholder="Email"
              onChange={(e) => { this.setState({ email: e.target.value }) }} />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="login-input"
              placeholder="Password"
              onChange={(e) => { this.setState({ password: e.target.value }) }} />
          </div>



          <button
            type="button"
            className="login-btn"
            onClick={this
              .osubmitLogin
              .bind(this)}>Login</button>

        </div>
      </div>
    );
  }

}
export default LoginBox;
