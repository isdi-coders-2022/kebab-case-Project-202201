import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import ThemeContext from "./components/contexts/ThemeContext";
import FavoriteStreamer from "./components/FavoriteStreamer/FavoriteStreamer";
import lightTheme from "./themes/lightTheme";

function App() {
  const { initialValue } = useContext(ThemeContext);
  return (
    <div>
    <ThemeProvider theme={lightTheme}>
      <div>
        <FavoriteStreamer streamerInfo={{ display_name: initialValue }} />
      </div>
    </ThemeProvider>
</div>
  );
}

export default App;
