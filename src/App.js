import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import { useContext, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import ThemeContext from "./store/contexts/ThemeContext";
import { toggleThemeAction } from "./store/actions/theme/actionCreators";
/* import FavoriteStreamer from "./components/FavoriteStreamer/FavoriteStreamer"; */
import useTwitchAPI from "./hooks/useTwitchAPI";
import MainPageContext from "./store/contexts/MainPageContext";

/* const streamerInfo = {
  display_name: "Wololoo",
  profile_image_url:
    "https://media.kingston.com/hyperx/bio/hx-bio-influencer-dendi.jpg",
}; */

function App() {
  const { theme, dispatch } = useContext(ThemeContext);
  const { streamerList } = useContext(MainPageContext);
  debugger;
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

        {/* <FavoriteStreamer streamerInfo={streamerInfo} /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
