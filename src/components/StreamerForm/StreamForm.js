import { useState } from "react";

const StreamerForm = ({ actionOnAdd, actionOnCancel }) => {
  const [name, setName] = useState("");
  const [imageImput, setImageImput] = useState("");
  const [description, setDescription] = useState("");

  return (
    <>
      <form className="form-data">
        <div className="form-block">
          <label htmlFor="Name">Name: </label>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            onChange={(event) => setName(event.target.value)}
            value={name}
          />
        </div>
        <div className="form-block">
          <label htmlFor="imageImput">Image: </label>
          <input
            aria-label="imageInput"
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
      <button onClick={actionOnCancel}>Cancel</button>
      <button
        className="addButton"
        onClick={() => {
          actionOnAdd(imageImput);
        }}
      >
        ADD +
      </button>
    </>
  );
};
export default StreamerForm;
