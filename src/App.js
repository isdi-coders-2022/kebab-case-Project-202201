import Header from "./components/Header/Header";
import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import ThemeContext from "./store/contexts/ThemeContext";
import { toggleThemeAction } from "./store/actions/theme/actionCreators";
import { Navigate, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import FormPage from "./pages/FormPage";
import InfoPage from "./pages/InfoPage";
import FavoritesPage from "./pages/FavoritesPage";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const { theme, dispatch } = useContext(ThemeContext);
  const toggleTheme = () => {
    dispatch(toggleThemeAction());
  };
  return (
    <ThemeProvider theme={theme}>
      <Header actionOnClick={toggleTheme} />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<MainPage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/form/:id" element={<FormPage />} />
        <Route path="/info/:id" element={<InfoPage />}></Route>
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
      <NavBar />
    </ThemeProvider>
  );
}

export default App;
