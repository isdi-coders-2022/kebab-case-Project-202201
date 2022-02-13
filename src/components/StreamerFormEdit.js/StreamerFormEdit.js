import styled from "styled-components";
import ButtonText from "../ButtonText/ButtonText";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import useFavoritesAPI from "../../hooks/useFavoritesAPI";
import { useNavigate } from "react-router-dom";

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

const StreamerFormEdit = ({ streamerId }) => {
  const [data, setData] = useState([]);
  const { modifyStreamer, getFavorite } = useFavoritesAPI();

  useEffect(() => {
    async function infoStreamer() {
      const infoStreamer = await getFavorite(streamerId);
      setData(infoStreamer);
    }
    infoStreamer();
  }, [getFavorite, streamerId]);

  const initialFields = {
    display_name: data.display_name,
    profile_image_url: data.profile_image_url,
    description: data.description,
  };

  let navigate = useNavigate();
  const goFavorites = () => {
    navigate(`/favorites`);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    modifyStreamer(streamerId, data);
    resetForm();
    goFavorites();
  };

  const resetForm = () => {
    setData(initialFields);
  };

  const changeData = (event) => {
    setData({
      ...data,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <>
      <StyledForm>
        <StyleLineForm onSubmit={onFormSubmit}>
          <FormBlock className="form-block">
            <label htmlFor="display_name">Name:</label>
            <input
              type="text"
              id="display_name"
              placeholder="Your Name"
              onChange={changeData}
              value={data.display_name}
            />
          </FormBlock>
          <FormBlock className="form-block">
            <label htmlFor="profile_image_url">Image:</label>
            <input
              type="imageInput"
              id="profile_image_url"
              placeholder="Your image"
              onChange={changeData}
              value={data.profile_image_url}
            />
          </FormBlock>
          <FormBlock className="form-block">
            <label htmlFor="description">Description:</label>
            <input
              type="description"
              id="description"
              placeholder="Description"
              value={data.description}
              onChange={changeData}
            />
          </FormBlock>
        </StyleLineForm>
        <StyleButtons>
          <ButtonText text={"CANCEL"} actionOnClick={goFavorites} />
          <ButtonText
            type="submit"
            text={"EDIT"}
            actionOnClick={onFormSubmit}
          />
        </StyleButtons>
      </StyledForm>
    </>
  );
};

StreamerFormEdit.propTypes = {
  name: PropTypes.string,
  imageImput: PropTypes.string,
  description: PropTypes.string,
};

export default StreamerFormEdit;
