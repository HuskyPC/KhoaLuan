import { Fragment } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./config";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import "./index.scss";
import "tw-elements";

ReactDOM.render(
  <Fragment>
    <App />
  </Fragment>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
