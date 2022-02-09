import styled from "styled-components";
import ButtonText from "../ButtonText/ButtonText";
import PropTypes from "prop-types";

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
  marging: 15px;
`;
const StyleButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  bottom: 10px;
`;
const StreamerForm = ({ name, imageImput, description }) => {
  return (
    <>
      <StyledForm>
        <StyleLineForm>
          <form className="form-data">
            <div className="form-block">
              <label for="name">Name:</label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                onChange={""}
                value={name}
              />
            </div>
            <div className="form-block">
              <label for="imageInput">Image:</label>
              <input
                type="imageInput"
                id="imageInput"
                placeholder="image"
                onChange={""}
                value={imageImput}
              />
            </div>
            <div className="form-block">
              <label for="description">Description:</label>
              <input
                type="description"
                id="description"
                placeholder="Description"
                value={description}
                onChange={""}
              />
            </div>
          </form>
        </StyleLineForm>
        <StyleButtons>
          <ButtonText text={"CANCEL"} actionOnClick={() => {}} />
          <ButtonText text={"ADD+"} actionOnClick={() => {}} />
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
