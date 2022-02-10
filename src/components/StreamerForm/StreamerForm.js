import styled from "styled-components";
import ButtonText from "../ButtonText/ButtonText";
import PropTypes from "prop-types";
import { useState } from "react";

const StyledForm = styled.form`
  background-color: ${(props) => props.theme.alt};
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 345px;
  height: 367px;
  left: 22px;
  top: 87px;
`;

const StyleLineForm = styled.div`
  color: ${(props) => props.theme.accent};
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  margin: 15px;
`;
const StyleButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  bottom: 10px;
`;
const StreamerForm = () => {
  const initialFields = {
    name: "",
    imageImput: "",
    description: "",
  };

  const [formData, setFormData] = useState(initialFields);

  return (
    <>
      <StyledForm>
        <StyleLineForm onSubmit={() => {}}>
          {/* <form className="form-data"> */}
          <div className="form-block">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              onChange={actionOnChange}
              value={formData.name}
            />
          </div>
          <div className="form-block">
            <label htmlFor="imageInput">Image:</label>
            <input
              type="imageInput"
              id="imageInput"
              placeholder="image"
              onChange={actionOnChange}
              value={formData.imageImput}
            />
          </div>
          <div className="form-block">
            <label htmlFor="description">Description:</label>
            <input
              type="description"
              id="description"
              placeholder="Description"
              value={formData.description}
              onChange={actionOnChange}
            />
          </div>
        </StyleLineForm>
        <StyleButtons>
          <ButtonText type="submit" text={"CANCEL"} actionOnClick={actionAdd} />
          <ButtonText text={"ADD+"} actionOnClick={actionCancel} />
        </StyleButtons>
      </StyledForm>
    </>
  );
};

StreamerForm.propTypes = {
  name: PropTypes.string,
  imageImput: PropTypes.string,
  description: PropTypes.string,
};

export default StreamerForm;
