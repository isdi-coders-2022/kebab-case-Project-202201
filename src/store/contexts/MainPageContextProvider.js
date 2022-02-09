import MainPageContext from "./MainPageContext";
import { useReducer } from "react";
import StreamerListReducer from "../reducers/StreamerListReducer";

const MainPageContextProvider = ({ children }) => {
  const [streamerList, dispatch] = useReducer(StreamerListReducer, []);
  return <MainPageContext.Provider>{children}</MainPageContext.Provider>;
};

export default MainPageContextProvider;
