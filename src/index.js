import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App-v1";
import StarRating from "./starRating";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={5} /> */}
    {/* <StarRating maxRating={10} /> */}
    {/* <StarRating maxRating={2.4} /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
