import Header from "./components/Header/Header";
//import NavBar from "./components/NavBar/NavBar";
import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import ThemeContext from "./store/contexts/ThemeContext";
import { toggleThemeAction } from "./store/actions/theme/actionCreators";
//import useTwitchAPI from "./hooks/useTwitchAPI";
import { Navigate, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import FormPage from "./pages/FormPage";
import InfoPage from "./pages/InfoPage";
import FavoritesPage from "./pages/FavoritesPage";

function App() {
  const { theme, dispatch } = useContext(ThemeContext);
  //const { dispatchStreamerList } = useTwitchAPI();
  const toggleTheme = () => {
    dispatch(toggleThemeAction());
  };
  /*useEffect(() => {
    dispatchStreamerList();
  }, [dispatchStreamerList]);*/

  return (
    <ThemeProvider theme={theme}>
      <Header actionOnClick={toggleTheme} />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<MainPage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/Info/:id" element={<InfoPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>

      {/* <FavoriteStreamer streamerInfo={streamerInfo} /> */}
    </ThemeProvider>
  );
}

export default App;
