import MainPageContext from "./MainPageContext";
import { useReducer } from "react";
import StreamerListReducer from "../reducers/StreamerListReducer";
import FavoritesReducer from "../reducers/FavoritesReducer";

const MainPageContextProvider = ({ children }) => {
  const [streamerList, dispatch] = useReducer(StreamerListReducer, []);
  const [favList, dispatchFavs] = useReducer(FavoritesReducer);
  return (
    <MainPageContext.Provider
      value={{ streamerList, dispatch, favList, dispatchFavs }}
    >
      {children}
    </MainPageContext.Provider>
  );
};

export default MainPageContextProvider;
