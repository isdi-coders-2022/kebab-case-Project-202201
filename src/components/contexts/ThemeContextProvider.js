import ThemeContext from "./ThemeContext";

const ThemeContextProvider = ({ children }) => {
  const initialValue = "light";
  return <ThemeContext value={{ initialValue }}>{children}</ThemeContext>;
};
export default ThemeContextProvider;
