import Detail from "../components/Detail/Detail";
import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import MainPageContext from "../store/contexts/MainPageContext";
import useTwitchAPI from "../hooks/useTwitchAPI";

const InfoPage = () => {
  const params = useParams();
  const { id } = params;
  console.log(params);
  console.log(id);
  const { info } = useContext(MainPageContext);

  return (
    <>
      <div className="container">
        <Detail streamerId={id} />
      </div>
    </>
  );
};

export default InfoPage;
