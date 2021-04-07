import "styles/index.css";

import { Auth0Provider } from "@auth0/auth0-react";
import { CLIENT_ID, DOMAIN } from "constants/auth";
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Auth } from "components";
ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={DOMAIN}
      clientId={CLIENT_ID}
      redirectUri={window.location.origin}
      audience="https://graphql.dev.rtg.tappollo.app"
    >
      <Auth>
        <App />
      </Auth>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
