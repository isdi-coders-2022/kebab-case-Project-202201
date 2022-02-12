import Detail from "../components/Detail/Detail";
import { useParams } from "react-router-dom";

const InfoPage = () => {
  const params = useParams();
  const { id } = params;

  return (
    <>
      <div className="container">
        <Detail streamerId={id} />
      </div>
    </>
  );
};

export default InfoPage;
