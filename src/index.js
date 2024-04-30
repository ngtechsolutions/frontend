import App from "app";
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "reportWebVitals";
import { GoogleOAuthProvider } from "@react-oauth/google";
// import { ErrorBoundary } from 'components/errors/error-boundary'
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GoogleOAuthProvider
    clientId="929616796919-ubd460i62nmo4eld5838p79jp01bp204.apps.googleusercontent.com"
    cookiepolicy="single_host_origin"
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GoogleOAuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
