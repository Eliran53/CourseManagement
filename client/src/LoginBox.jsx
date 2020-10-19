import React from "react";
import axios from 'axios';
import { useHistory } from 'react-router-dom'

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
          const history = useHistory();
          history.push('/')

        }


      }).catch(() => {
        this.props.onError();
        console.log('some ERROR!!!!!!!')
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
