import React from "react";
import axios from "axios";
import history from "../history";
import Cookies from "js-cookie";

function logOut() {
  
  Cookies.remove("token");
  history.push('/')
  window.location.reload();
}

export default logOut;
