import MainPageContext from "./MainPageContext";
import { useReducer } from "react";
import StreamerListReducer from "../reducers/StreamerListReducer";
import FavoritesReducer from "../reducers/FavoritesReducer";
import StreamerInfoReducer from "../reducers/StreamerInfoReducer";

const MainPageContextProvider = ({ children }) => {
  const [streamerList, dispatchStreamerList] = useReducer(
    StreamerListReducer,
    []
  );
  const [favList, dispatchFavs] = useReducer(FavoritesReducer);
  const [info, dispatchInfo] = useReducer(StreamerInfoReducer);

  return (
    <MainPageContext.Provider
      value={{
        streamerList,
        dispatchStreamerList,
        favList,
        dispatchFavs,
        info,
        dispatchInfo,
      }}
    >
      {children}
    </MainPageContext.Provider>
  );
};

export default MainPageContextProvider;
