import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import ThemeContext from "./store/contexts/ThemeContext";
import { toggleThemeAction } from "./store/actions/theme/actionCreators";
import FavoriteStreamer from "./components/FavoriteStreamer/FavoriteStreamer";

const streamerInfo = {
  display_name: "Wololoo",
  profile_image_url:
    "https://media.kingston.com/hyperx/bio/hx-bio-influencer-dendi.jpg",
};

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
        <FavoriteStreamer streamerInfo={streamerInfo} />
      </div>
    </ThemeProvider>

  );
}

export default App;
