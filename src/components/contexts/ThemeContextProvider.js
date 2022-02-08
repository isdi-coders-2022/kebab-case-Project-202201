import ThemeContext from "./ThemeContext";

const ThemeContextProvider = ({ children }) => {
  const initialValue = "light";
  return (
    <ThemeContext.Provider value={{ initialValue }}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeContextProvider;
