import React from "react";
import LoginBox from './LoginBox';
import RegisterBox from './RegisterBox';
import { useHistory } from "react-router-dom";
import "./login-style.scss";
// import "./login-style.scss";


 class LoginRegister extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        isLoginOpen: true,
        isRegisterOpen: false,
        formType : 'login'
      };
    }
  
    showLoginBox() {
      this.setState({ isLoginOpen: true, isRegisterOpen: false });
      this.setState({formType : 'login'});
    }
  
  
    showRegisterBox() {
      this.setState({ isRegisterOpen: true, isLoginOpen: false });
      this.setState({formType : 'register'});
    }

    goHome = () => {
      const history = useHistory("http://localhost:3000");
      history.push('home');
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
            {this.state.isLoginOpen && <LoginBox onLogin={this.goHome} />}
            {this.state.isRegisterOpen && <RegisterBox onRegister={this.showLoginBox.bind(this)}/>}
          </div>
        </div>
      );
  
    }
  }

  export default LoginRegister;