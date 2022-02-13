import Detail from "../components/Detail/Detail";
import { useParams } from "react-router-dom";
import Container from "../globalTheme";

const InfoPage = () => {
  const params = useParams();
  const { id } = params;

  return (
    <Container>
      <Detail streamerId={id} />
    </Container>
  );
};

export default InfoPage;
