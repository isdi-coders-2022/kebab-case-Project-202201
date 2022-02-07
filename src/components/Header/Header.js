import styled from "styled-components";

const HeaderBar = styled.div`
  height: 60px;
  width: 100%;
  background: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: absolute;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
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

const LogoImg = styled.img`
  width: 38px;
  height: 47px;
  padding-left: 15px;
  align-self: flex-start;
`;

const Header = () => {
  return (
    <>
      <HeaderBar>
        <LogoImg src={"img/logo.png"}></LogoImg>
        <StreamingImg src={"img/streaminglight.png"}></StreamingImg>
        <ShawarmaImg src={"img/shawarmalight.png"}></ShawarmaImg>
      </HeaderBar>
    </>
  );
};

export default Header;
