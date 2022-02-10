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
        <Route path="/Info/:id" element={<InfoPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
