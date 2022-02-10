import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import { useContext, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import ThemeContext from "./store/contexts/ThemeContext";
import { toggleThemeAction } from "./store/actions/theme/actionCreators";
import useTwitchAPI from "./hooks/useTwitchAPI";


function App() {
  const { theme, dispatch } = useContext(ThemeContext);

  const { dispatchStreamerList } = useTwitchAPI();
  const toggleTheme = () => {
    dispatch(toggleThemeAction());
  };

  useEffect(() => {
    dispatchStreamerList();
  }, [dispatchStreamerList]);


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
