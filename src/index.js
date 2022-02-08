import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ApiKebabContextProvider from "./components/contexts/ApiKebabContextProvider";
import ThemeContextProvider from "./components/contexts/ThemeContextProvider";

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
