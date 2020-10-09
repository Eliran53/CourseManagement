import React from "react";
import reactDOM from "react-dom";
// import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
// import Login from "./components/Login";
// import Register from "./components/Register";
import LoginRegister from "./LoginAndRegister";


export default class App extends React.Component {
  render() {
    return (
      // <BrowserRouter>
      //   <div className="App">
      //     <Link to='/login'> Login</Link>
      //     <Link to='/register'>Register</Link>


      //     <Switch>
      //       <Route exact path='/login' component={Login} />
      //       <Route exact path='/register' render={() => <Register />} />
      //     </Switch>

      //   </div>
      // </BrowserRouter>

      <div>
        <LoginRegister/>
      </div>
    )
  }

}

reactDOM.render(
  <App />, document.getElementById("root"));