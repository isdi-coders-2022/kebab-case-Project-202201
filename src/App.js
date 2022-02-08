import { useContext } from "react";
import ThemeContext from "./components/contexts/ThemeContext";
import ThemeContextProvider from "./components/contexts/ThemeContextProvider";
import FavoriteStreamer from "./components/FavoriteStreamer/FavoriteStreamer";

function App() {
  const { initialValue } = useContext(ThemeContext);
  return (
    <div>
      <FavoriteStreamer streamerInfo={{ display_name: initialValue }} />
    </div>
  );
}

export default App;
