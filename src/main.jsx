import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Products from "./components/3-main/Products.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

      <App />
      <Products />

  </React.StrictMode>
);
