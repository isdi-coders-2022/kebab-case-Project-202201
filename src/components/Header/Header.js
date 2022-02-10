import styled from "styled-components";
import ButtonImage from "../ButtonImage/ButtonImage";

const HeaderBar = styled.header`
  height: 60px;
  width: 100%;
  background-color: ${(props) => props.theme.accent};
  /* background-color: ${(props) => props.theme.body}; */
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  z-index: 20;
  & button {
    width: 38px;
    height: 47px;
    padding-left: 15px;
    align-self: flex-start;
  }
`;

const StreamingImg = styled.img`
  position: absolute;
  width: 87px;
  height: 16px;
  left: 70px;
  top: 3px;
`;

const ShawarmaImg = styled.img`
  position: absolute;
  width: 186px;
  height: 31px;
  left: 102px;
  top: 19px;
`;

const Header = ({ actionOnClick }) => {
  return (
    <>
      <HeaderBar>
        <ButtonImage
          imageAlt={"logo shawarma"}
          image={"img/logo.png"}
          actionOnClick={actionOnClick}
        />
        <StreamingImg
          src={"img/streaminglight.png"}
          alt={"streaming header title"}
        ></StreamingImg>
        <ShawarmaImg
          src={"img/shawarmalight.png"}
          alt={"streaming header title"}
        ></ShawarmaImg>
      </HeaderBar>
    </>
  );
};

export default Header;
