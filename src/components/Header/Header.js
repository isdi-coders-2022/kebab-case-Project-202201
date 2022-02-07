import styled from "styled-components";

const HeaderBar = styled.div`
  height: 50px;
  width: 100%;
  background: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: absolute;
`;

const StreamingImg = styled.img`
  position: absolute;
  width: 87px;
  height: 16px;
  left: 70px;
  top: 3px;
  src: ${"img/streaminglight.png"};
`;

const Header = () => {
  return (
    <>
      <HeaderBar>
        <StreamingImg src={"img/streaminglight.png"}></StreamingImg>
      </HeaderBar>
    </>
  );
};

export default Header;
