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

  const streamerInfo = (streamers, index) => {
    const profile_image_url = streamers[index].thumbnail_url;
    const broadcaster_type = "master";
    const display_name = streamers[index].user_name;
    const type = streamers[index].type;
    const description = streamers[index].title;
    return {
      profile_image_url,
      broadcaster_type,
      display_name,
      type,
      description,
    };
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
        <Streamer props={streamerList(streamerInfo, 0)} />
        <Streamer props={streamerList(streamerInfo, 1)} />
        <Streamer props={streamerList(streamerInfo, 2)} />
        {/* <FavoriteStreamer streamerInfo={streamerInfo} /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
