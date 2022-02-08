import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import ThemeContext from "./store/contexts/ThemeContext";
import FavoriteStreamer from "./components/FavoriteStreamer/FavoriteStreamer";
import lightTheme from "./themes/lightTheme";
import Button from "./components/Button/Button";

function App() {
  const { initialValue } = useContext(ThemeContext);
  return (
    <div>
      <ThemeProvider theme={lightTheme}>
        <div>
          <Button />
          <FavoriteStreamer streamerInfo={{ display_name: initialValue }} />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
