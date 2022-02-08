import Header from "./components/Header/Header";
import Streamer from "./components/Streamer/Streamer";
import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import ThemeContext from "./components/contexts/ThemeContext";
import FavoriteStreamer from "./components/FavoriteStreamer/FavoriteStreamer";
import lightTheme from "./themes/lightTheme";


function App() {
  const { initialValue } = useContext(ThemeContext);
  return (
    <ThemeProvider theme={lightTheme}>
      <div>
        <FavoriteStreamer streamerInfo={{ display_name: initialValue }} />
      </div>
    </ThemeProvider>
  );
}

export default App;
