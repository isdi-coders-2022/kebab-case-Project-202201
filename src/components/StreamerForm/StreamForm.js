import { useState } from "react";

const StreamerForm = ({
  actionOnAdd,
  actionOnCancel,
  name,
  imageImput,
  description,
}) => {
  return (
    <>
      <form className="form-data">
        <div className="form-block">
          <label htmlFor="Name">Name: </label>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            onChange={""}
            value={name}
          />
        </div>
        <div className="form-block">
          <label htmlFor="imageImput">Image: </label>
          <input
            type="imageImput"
            id="imageImput"
            placeholder="image"
            onChange={""}
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
            onChange={""}
          />
        </div>
      </form>
      <button onClick={actionOnCancel}>Cancel</button>
      <button className="addButton" onClick={""}>
        ADD +
      </button>
    </>
  );
};
export default StreamerForm;
