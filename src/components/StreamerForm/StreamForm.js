import { useContext } from "react";

import ApiKebabContext from "../contexts/ApiKebabContext";

const StreamerForm = () => {
  const { name, setName } = useContext(ApiKebabContext);
  const { imageImput, setImageImput } = useContext(ApiKebabContext);
  const { description, setDescription } = useContext(ApiKebabContext);

  return (
    <>
      <form className="form-data ">
        <div className="form-block ">
          <label htmlFor="Name">Name: </label>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            onChange={(event) => setName(event.target.value)}
            value={name}
          />
        </div>
        <div className="form-block ">
          <label htmlFor="imageImput">Image: </label>
          <input
            type="imageImput"
            id="imageImput"
            placeholder="image"
            onChange={(event) => setImageImput(event.target.value)}
            value={imageImput}
          />
        </div>
        <div className="form-block">
          <label htmlFor="Description">Description: </label>
          <input
            type="Description"
            id="description"
            placeholder="Description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
      </form>
    </>
  );
};
export default StreamerForm;
