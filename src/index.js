import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {BrowserRouter} from "react-router-dom";
import AppRoute from "../src/App/AppRoute";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-icons/icons/"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter> 
      <AppRoute />
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
