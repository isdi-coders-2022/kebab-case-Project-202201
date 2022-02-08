import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import ThemeContext from "./components/contexts/ThemeContext";
import ThemeContextProvider from "./components/contexts/ThemeContextProvider";
import FavoriteStreamer from "./components/FavoriteStreamer/FavoriteStreamer";
import lightTheme from "./themes/lightTheme";
import darkTheme from "./themes/darkTheme";

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
