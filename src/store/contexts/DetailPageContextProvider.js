import DetailPageContext from "./DetailPageContext";

const DetailPageContextProvider = ({ children }) => {
  return (
    <DetailPageContext.Provider value={""}>
      {children}
    </DetailPageContext.Provider>
  );
};

export default DetailPageContextProvider;
