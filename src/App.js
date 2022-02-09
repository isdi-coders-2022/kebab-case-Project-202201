import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import { useContext, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import ThemeContext from "./store/contexts/ThemeContext";
import { toggleThemeAction } from "./store/actions/theme/actionCreators";
<<<<<<< HEAD
import FavoriteStreamer from "./components/FavoriteStreamer/FavoriteStreamer";
import ClipCarousel from "./components/ClipCarousel/ClipCarousel";
=======
/* import FavoriteStreamer from "./components/FavoriteStreamer/FavoriteStreamer"; */
import useTwitchAPI from "./hooks/useTwitchAPI";
>>>>>>> master

/* const streamerInfo = {
  display_name: "Wololoo",
  profile_image_url:
    "https://media.kingston.com/hyperx/bio/hx-bio-influencer-dendi.jpg",
}; */

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
<<<<<<< HEAD
        <FavoriteStreamer streamerInfo={streamerInfo} />
        <ClipCarousel streamerId={431671263} />
=======
        {/* <FavoriteStreamer streamerInfo={streamerInfo} /> */}
>>>>>>> master
      </div>
    </ThemeProvider>
  );
}

export default App;
