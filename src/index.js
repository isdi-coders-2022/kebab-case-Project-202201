import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import ApiKebabContextProvider from "./store/contexts/ApiKebabContextProvider";
import MainPageContextProvider from "./store/contexts/MainPageContextProvider";
import ThemeContextProvider from "./store/contexts/ThemeContextProvider";

ReactDOM.render(
  <React.StrictMode>
    <MainPageContextProvider>
      <ThemeContextProvider>
        <ApiKebabContextProvider>
          <App />
        </ApiKebabContextProvider>
      </ThemeContextProvider>
    </MainPageContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
