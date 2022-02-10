import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import { useContext, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import ThemeContext from "./store/contexts/ThemeContext";
import { toggleThemeAction } from "./store/actions/theme/actionCreators";
import useTwitchAPI from "./hooks/useTwitchAPI";
import MainPageContext from "./store/contexts/MainPageContext";
import Streamer from "./components/Streamer/Streamer";
import Detail from "./components/Detail/Detail";

function App() {
  const { theme, dispatch } = useContext(ThemeContext);
  const { streamerList } = useContext(MainPageContext);

  /* const streamerInfo = (streamers, index) => {
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
  }; */

  const { dispatchStreamerList } = useTwitchAPI();
  const toggleTheme = () => {
    dispatch(toggleThemeAction());
  };
  useEffect(() => {
    dispatchStreamerList();
  }, [dispatchStreamerList]);

  const streamerData = {
    id: "124422593",
    display_name: "LEC",
    type: "online",
    broadcaster_type: "partner",
    description:
      "Official Twitch Channel of the League of Legends European Championship. For more information, schedules and stats head to Lolesports.com",
    profile_image_url:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/41b23352-5c99-4eb2-974b-1e9b8120425e-profile_image-300x300.png",
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header actionOnClick={toggleTheme} />
        <NavBar />
        {/* <Streamer props={streamerInfo(streamerList, 3)} />
        <Streamer props={streamerInfo(streamerList, 1)} />
        <Streamer props={streamerInfo(streamerList, 2)} /> */}
        {/* <FavoriteStreamer streamerInfo={streamerInfo} /> */}
        <Detail streamerInfo={streamerData} actionOnClick={() => {}} />
      </div>
    </ThemeProvider>
  );
}

export default App;
