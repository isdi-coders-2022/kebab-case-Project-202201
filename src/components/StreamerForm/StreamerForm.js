import styled from "styled-components";
import ButtonText from "../ButtonText/ButtonText";
import PropTypes from "prop-types";
import { useState } from "react";
import useFavoritesAPI from "../../hooks/useFavoritesAPI";

const StyledForm = styled.form`
  background-color: ${(props) => props.theme.alt};
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  position: absolute;
  width: 500px;
  height: 500px;
  left: 22px;
`;

const StyleLineForm = styled.div`
  color: ${(props) => props.theme.accent};
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  padding: 10px;
  width: 400px;
  margin: 15px;
`;
const FormBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;
const StyleButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  bottom: 10px;
`;
const StreamerForm = () => {
  const { sendStreamer } = useFavoritesAPI();

  const initialFields = {
    name: "",
    imageInput: "",
    description: "",
  };

  const [formData, setFormData] = useState(initialFields);

  const onFormSubmit = (event) => {
    event.preventDefault();
    sendStreamer(formData);
    resetForm();
  };

  const resetForm = () => {
    setFormData(initialFields);
  };
  const changeData = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <>
      <StyledForm>
        <StyleLineForm onSubmit={onFormSubmit}>
          <FormBlock className="form-block">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              onChange={changeData}
              value={formData.name}
            />
          </FormBlock>
          <FormBlock className="form-block">
            <label htmlFor="imageInput">Image:</label>
            <input
              type="imageInput"
              id="imageInput"
              placeholder="Your image"
              onChange={changeData}
              value={formData.imageInput}
            />
          </FormBlock>
          <FormBlock className="form-block">
            <label htmlFor="description">Description:</label>
            <input
              type="description"
              id="description"
              placeholder="Description"
              value={formData.description}
              onChange={changeData}
            />
          </FormBlock>
        </StyleLineForm>
        <StyleButtons>
          <ButtonText text={"CANCEL"} actionOnClick={resetForm} />
          <ButtonText
            type="submit"
            text={"ADD+"}
            actionOnClick={onFormSubmit}
          />
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
