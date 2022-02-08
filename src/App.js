import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import ThemeContext from "./store/contexts/ThemeContext";
import { toggleThemeAction } from "./store/actions/theme/actionCreators";
import StreamerForm from "./components/StreamerForm/StreamForm";

function App() {
  const { theme, dispatch } = useContext(ThemeContext);

  const toggleTheme = () => {
    dispatch(toggleThemeAction());
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header actionOnClick={toggleTheme} />
        <StreamerForm />
        <NavBar />
      </div>
    </ThemeProvider>
  );
}

export default App;
