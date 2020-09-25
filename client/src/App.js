import React from "react";
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 890bd56cbf08f51aa9666e1c3e48335a0bdaf7a0
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Makeup from "./components/pages/Makeup";
import Health from "./components/pages/Health";
import PersonalDevelopment from "./components/pages/Personal-Development";
import Register from "./components/pages/Register";


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/Makeup" component={Makeup} />
        <Route path="/Health" component={Health} />
        <Route path="/Personal-Development" component={PersonalDevelopment} />
        <Route path="/Register" component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
<<<<<<< HEAD

=======
=======
>>>>>>> 890bd56cbf08f51aa9666e1c3e48335a0bdaf7a0
import reactDOM from "react-dom";


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoginOpen: true,
      isRegisterOpen: false,
      userName:''
      
    };  
  }

  showLoginBox() {
    this.setState({ isLoginOpen: true, isRegisterOpen: false });
  }

  showRegisterBox() {
    this.setState({ isRegisterOpen: true, isLoginOpen: false });
  }

  render() {

    return (
      <div className="root-container">

        <div className="box-controller">
          <div
            className={"controller " + (this.state.isLoginOpen
              ? "selected-controller"
              : "")}
            onClick={this
              .showLoginBox
              .bind(this)}>
            Login
          </div>
          <div
            className={"controller " + (this.state.isRegisterOpen
              ? "selected-controller"
              : "")}
            onClick={this
              .showRegisterBox
              .bind(this)}>
            Register
          </div>
        </div>


        <div className="box-container">
          {this.state.isLoginOpen && <LoginBox />}
          {this.state.isRegisterOpen && <RegisterBox />}
        </div>


      </div>
    );

  }

}

class LoginBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  submitLogin(e) {}

  render() {
    return (
      <div className="inner-container">
        <div className="header">
          Login
        </div>
        <div className="box">

          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              className="login-input"
              placeholder="Username" 
              onChange = {(e)=>  this.setState({userName: e.target.value}) }
               /> 
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="login-input"
              placeholder="Password" />
          </div>

          <button
            type="button"
            className="login-btn"
            onClick={this
              .submitLogin
              .bind(this)}>Login</button>

        </div>
      </div>
    );
  }

}

function pop(props) {
  return
}

class RegisterBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      errors: [],
      pwdState: null
    };
  }

  showValidationErr(elm, msg) {
    this.setState((prevState) => ({
      errors: [
        ...prevState.errors, {
          elm,
          msg
        }
      ]
    }));
  }

  clearValidationErr(elm) {
    this.setState((prevState) => {
      let newArr = [];
      for (let err of prevState.errors) {
        if (elm != err.elm) {
          newArr.push(err);
        }
      }
      return { errors: newArr };
    });
  }

  onUsernameChange(e) {
    this.setState({ username: e.target.value });
    this.clearValidationErr("username");
  }

  onEmailChange(e) {
    this.setState({ email: e.target.value });
    this.clearValidationErr("email");
  }

  onPasswordChange(e) {
    this.setState({ password: e.target.value });
    this.clearValidationErr("password");

    this.setState({ pwdState: "weak" });
    if (e.target.value.length > 8) {
      this.setState({ pwdState: "medium" });
    } else if (e.target.value.length > 12) {
      this.setState({ pwdState: "strong" });
    }

  }

  openPopup(e) {
    console.log("Hello world!");
  }

  submitRegister(e) {

    console.log(this.state);

    if (this.state.username == "") {
      this.showValidationErr("username", "Username Cannot be empty!");
    }
    if (this.state.email == "") {
      this.showValidationErr("email", "Email Cannot be empty!");
    }
    if (this.state.password == "") {
      this.showValidationErr("password", "Password Cannot be\ empty!");
    }

  }

  render() {

    let usernameErr = null,
      passwordErr = null,
      emailErr = null;

    for (let err of this.state.errors) {
      if (err.elm == "username") {
        usernameErr = err.msg;
      }
      if (err.elm == "password") {
        passwordErr = err.msg;
      }
      if (err.elm == "email") {
        emailErr = err.msg;
      }
    }

    let pwdWeak = false,
      pwdMedium = false,
      pwdStrong = false;

    if (this.state.pwdState == "weak") {
      pwdWeak = true;
    } else if (this.state.pwdState == "medium") {
      pwdWeak = true;
      pwdMedium = true;
    } else if (this.state.pwdState == "strong") {
      pwdWeak = true;
      pwdMedium = true;
      pwdStrong = true;
    }

    return (
      <div className="inner-container">
        <div className="header">
          Register
        </div>
        <div className="box">

          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              className="login-input"
              placeholder="Username"
              onChange={this
                .onUsernameChange
                .bind(this)} />
            <small className="danger-error">{usernameErr
              ? usernameErr
              : ""}</small>
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              className="login-input"
              placeholder="Email"
              onChange={this
                .onEmailChange
                .bind(this)} />
            <small className="danger-error">{emailErr
              ? emailErr
              : ""}</small>
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="login-input"
              placeholder="Password"
              onChange={this
                .onPasswordChange
                .bind(this)} />
            <small className="danger-error">{passwordErr
              ? passwordErr
              : ""}</small>

            {this.state.password && <div className="password-state">
              <div
                className={"pwd pwd-weak " + (pwdWeak
                  ? "show"
                  : "")}></div>
              <div
                className={"pwd pwd-medium " + (pwdMedium
                  ? "show"
                  : "")}></div>
              <div
                className={"pwd pwd-strong " + (pwdStrong
                  ? "show"
                  : "")}></div>
            </div>}

          </div>

          <button
            type="button"
            className="login-btn"
            onHover={this
              .openPopup
              .bind(this)}
            onClick={this
              .openPopup
              .bind(this)}>Register</button>

        </div>
      </div>

    );

  }

}

<<<<<<< HEAD
reactDOM.render(<App />, document.getElementById("root"));

=======
reactDOM.render(
  <App />, document.getElementById("root"));
>>>>>>> Einav-the-Queen
>>>>>>> 890bd56cbf08f51aa9666e1c3e48335a0bdaf7a0
