import styled from "styled-components";

const ButtonImg = styled.button`
  border-color: ${(props) => props.theme.accentAlt2};
  width: 50px;
  height: 50px;
`;

const ButtonImage = ({ imageAlt, image, actionOnClick }) => {
  return (
    <ButtonImg type="button" onClick={actionOnClick}>
      <img alt={imageAlt} src={image} />
    </ButtonImg>
  );
};
export default ButtonImage;
