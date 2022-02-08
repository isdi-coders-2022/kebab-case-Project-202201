import styled from "styled-components";

const ButtonImg = styled.button`
  background-color: transparent;
  border: 0px;
  display: flex;
  align-items: flex-start
  width: 50px;
  height: 50px;
  & img {
    height : 100%;
  }
`;

const ButtonImage = ({ imageAlt, image, actionOnClick }) => {
  return (
    <ButtonImg type="button" onClick={actionOnClick}>
      <img alt={imageAlt} src={image} />
    </ButtonImg>
  );
};
export default ButtonImage;
