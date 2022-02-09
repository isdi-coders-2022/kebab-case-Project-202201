import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import { useContext, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import ThemeContext from "./store/contexts/ThemeContext";
import { toggleThemeAction } from "./store/actions/theme/actionCreators";
import useTwitchAPI from "./hooks/useTwitchAPI";
import MainPageContext from "./store/contexts/MainPageContext";
import Streamer from "./components/Streamer/Streamer";

function App() {
  const { theme, dispatch } = useContext(ThemeContext);
  const { streamerList } = useContext(MainPageContext);

  const streamerInfo = {
    profile_image_url:
      "https://media.kingston.com/hyperx/bio/hx-bio-influencer-dendi.jpg",
    broadcaster_type: "prueba",
    display_name: "prueba",
    type: "prueba",
    description: "prueba",
  };

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
        <Streamer props={streamerInfo} />
        <Streamer props={streamerInfo} />
        <Streamer props={streamerInfo} />
        {/* <FavoriteStreamer streamerInfo={streamerInfo} /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
