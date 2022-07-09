import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style/style.scss";
import "./style/font.css";
import "swiper/css/bundle";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
