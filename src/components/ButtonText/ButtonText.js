import styled from "styled-components";

const ButtonText = styled.button`
  background-color: ${(props) => props.theme.accent};
  border-color: ${(props) => props.theme.accentAlt2};
  color: white;
  border-radius: 4px;
  width: 65px;
  height: 35px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  padding: 4px 8px 4px 6px;
`;

const Button = ({ text, actionOnClick }) => {
  return (
    <ButtonText type="button" onClick={actionOnClick}>
      {text}
    </ButtonText>
  );
};
export default Button;
