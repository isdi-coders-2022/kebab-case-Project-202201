import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import { useContext, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import ThemeContext from "./store/contexts/ThemeContext";
import { toggleThemeAction } from "./store/actions/theme/actionCreators";
import useTwitchAPI from "./hooks/useTwitchAPI";

import Detail from "./components/Detail/Detail";

function App() {
  const { theme, dispatch } = useContext(ThemeContext);

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
        <Detail streamerInfo={streamerData} actionOnClick={() => {}} />
      </div>
    </ThemeProvider>
  );
}

export default App;
