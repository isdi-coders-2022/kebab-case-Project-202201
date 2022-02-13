import styled from "styled-components";
import ButtonText from "../ButtonText/ButtonText";
import PropTypes from "prop-types";
import { useState } from "react";
import useFavoritesAPI from "../../hooks/useFavoritesAPI";

const StyledForm = styled.form`
  background-color: ${(props) => props.theme.alt};
  width: 100%;
`;

const StyleLineForm = styled.div`
  color: ${(props) => props.theme.accent};
  display: flex;
  flex-direction: column;
  width: 100%;
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
const StyledInput = styled.input`
  height: 50px;
  border-style: none;
  padding-left: 10px;
  border-radius: 5px;
  &:focus {
    outline: 1px solid #6200ee;
  }
`;

const StreamerForm = () => {
  const { sendStreamer } = useFavoritesAPI();

  const initialFields = {
    display_name: "",
    profile_image_url: "",
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
            <label htmlFor="display_name">Name:</label>
            <StyledInput
              type="text"
              id="display_name"
              placeholder="Your Name"
              onChange={changeData}
              value={formData.display_name}
            />
          </FormBlock>
          <FormBlock className="form-block">
            <label htmlFor="profile_image_url">Image:</label>
            <StyledInput
              type="imageInput"
              id="profile_image_url"
              placeholder="Your image"
              onChange={changeData}
              value={formData.profile_image_url}
            />
          </FormBlock>
          <FormBlock className="form-block">
            <label htmlFor="description">Description:</label>
            <StyledInput
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
