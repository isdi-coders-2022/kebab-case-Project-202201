import styled from "styled-components";
import ButtonText from "../ButtonText/ButtonText";
import ButtonImage from "../ButtonImage/ButtonImage";

const NavBarStyled = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 65px;
  background: ${(props) => props.theme.accent};
  box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const NavBar = () => {
  return (
    <>
      <NavBarStyled>
        <ButtonText text={"HOME"} actionOnClick={""} />
        <ButtonImage
          image={"img/multidurum.png"}
          imageAlt={"multidurum"}
          actionOnClick={""}
        />
        <ButtonText text={"FAVS"} actionOnClick={""} />
      </NavBarStyled>
    </>
  );
};

export default NavBar;
