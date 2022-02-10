import styled from "styled-components";

import ButtonImage from "../ButtonImage/ButtonImage";
import { Link } from "react-router-dom";

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
const Button = styled.div`
  background-color: white;
  border-color: black;
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

const NavBar = () => {
  return (
    <>
      <NavBarStyled>
        <Button>
          <Link role={"button"} to={"/home"}>
            HOME
          </Link>
        </Button>

        <Link to={"/form"}>
          <ButtonImage image={"img/multidurum.png"} imageAlt={"multidurum"} />
        </Link>
        <Button>
          <Link role={"button"} to={"/favorites"}>
            FAVS
          </Link>
        </Button>
      </NavBarStyled>
    </>
  );
};

export default NavBar;
