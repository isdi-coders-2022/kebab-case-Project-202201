import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import MainPageContextProvider from "./store/contexts/MainPageContextProvider";
import ThemeContextProvider from "./store/contexts/ThemeContextProvider";

ReactDOM.render(
  <React.StrictMode>
    <MainPageContextProvider>
      <ThemeContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeContextProvider>
    </MainPageContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
