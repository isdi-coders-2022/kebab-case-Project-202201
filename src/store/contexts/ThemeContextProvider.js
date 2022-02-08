import { useReducer } from "react";
import themeReducer from "../reducers/themeReducer";
import ThemeContext from "./ThemeContext";
import lightTheme from "../../themes/lightTheme";

const ThemeContextProvider = ({ children }) => {
  const initialValue = lightTheme;
  const [theme, dispatch] = useReducer(themeReducer, initialValue);
  return (
    <ThemeContext.Provider value={{ theme, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeContextProvider;
