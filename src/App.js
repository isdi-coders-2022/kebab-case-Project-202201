import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import ThemeContext from "./store/contexts/ThemeContext";
import { toggleThemeAction } from "./store/actions/theme/actionCreators";
import FavoriteStreamer from "./components/FavoriteStreamer/FavoriteStreamer";
import ClipCarousel from "./components/ClipCarousel/ClipCarousel";

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
        <ClipCarousel streamerId={431671263} />
      </div>
    </ThemeProvider>
  );
}

export default App;
