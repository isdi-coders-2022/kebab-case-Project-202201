import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import ApiKebabContextProvider from "./components/contexts/ApiKebabContextProvider";

ReactDOM.render(
  <React.StrictMode>
    <ApiKebabContextProvider>
      <App />
    </ApiKebabContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
