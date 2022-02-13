import StreamerForm from "../components/StreamerForm/StreamerForm";
import StreamerFormEdit from "../components/StreamerFormEdit.js/StreamerFormEdit";
import { useParams } from "react-router-dom";

const FormPage = () => {
  const params = useParams();
  const { id } = params;

  return (
    <>
      <div className="container">
        {!id ? <StreamerForm /> : <StreamerFormEdit streamerId={id} />}
      </div>
    </>
  );
};

export default FormPage;
