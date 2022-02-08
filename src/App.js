import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import ThemeContext from "./store/contexts/ThemeContext";
import { toggleThemeAction } from "./store/actions/theme/actionCreators";

function App() {
  const { theme, dispatch } = useContext(ThemeContext);

  const toggleTheme = () => {
    dispatch(toggleThemeAction());
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header actionOnClick={toggleTheme} />
        <NavBar />
      </div>
    </ThemeProvider>
  );
}

export default App;
