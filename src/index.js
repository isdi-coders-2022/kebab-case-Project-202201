import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import ApiKebabContextProvider from "./store/contexts/ApiKebabContextProvider";
import ThemeContextProvider from "./store/contexts/ThemeContextProvider";

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <ApiKebabContextProvider>
        <App />
      </ApiKebabContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
