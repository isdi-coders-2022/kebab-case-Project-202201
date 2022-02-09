import MainPageContext from "./MainPageContext";

const MainPageContextProvider = ({ children }) => {
  return <MainPageContext.Provider>{children}</MainPageContext.Provider>;
};
