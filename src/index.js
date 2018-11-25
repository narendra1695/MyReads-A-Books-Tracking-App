import React from "react";
import ReactDOM from "react-dom";

//importing component for routing to conviently handle url and page manipulations
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./App.css";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
