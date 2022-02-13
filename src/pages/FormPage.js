import StreamerForm from "../components/StreamerForm/StreamerForm";
import StreamerFormEdit from "../components/StreamerFormEdit.js/StreamerFormEdit";
import { useParams } from "react-router-dom";
import Container from "../globalTheme";

const FormPage = () => {
  const params = useParams();
  const { id } = params;

  return (
    <Container>
      {!id ? <StreamerForm /> : <StreamerFormEdit streamerId={id} />}
    </Container>
  );
};

export default FormPage;
