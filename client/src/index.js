import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
  <Auth0Provider
    domain="dev-glbca-gb.us.auth0.com"
    clientId="fj2scFp0Wee7QMd4duzFAnznSAWspQhy"
    // redirectUri={window.location.origin}
    redirectUri={"http://localhost:3000"}  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
    
);