import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import ThemeContext from "./store/contexts/ThemeContext";
import FavoriteStreamer from "./components/FavoriteStreamer/FavoriteStreamer";
import lightTheme from "./themes/lightTheme";
import Header from "./components/Header/Header";

function App() {
  const { initialValue } = useContext(ThemeContext);
  return (
    <div>
    <ThemeProvider theme={lightTheme}>
      <div>
        <Header />
        <FavoriteStreamer streamerInfo={{ display_name: initialValue }} />
      </div>
    </ThemeProvider>
</div>
  );
}

export default App;
