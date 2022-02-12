import styled from "styled-components";
import propTypes from "prop-types";

const ButtonImg = styled.button`
  background-color: transparent;
  border: 0px;
  display: flex;
  align-items: flex-start;
  width: 50px;
  height: 50px;
  cursor: pointer;
  & img {
    height: 100%;
  }
`;

const ButtonImage = ({ favClass, imageAlt, image, actionOnClick }) => {
  return (
    <ButtonImg className={favClass} type="button" onClick={actionOnClick}>
      <img alt={imageAlt} src={image} />
    </ButtonImg>
  );
};

ButtonImage.propTypes = {
  image: propTypes.string,
  imageAlt: propTypes.string,
  onclick: propTypes.func,
};

export default ButtonImage;
