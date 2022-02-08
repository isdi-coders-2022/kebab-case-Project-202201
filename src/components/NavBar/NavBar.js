import styled from "styled-components";

const NavBarStyled = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 65px;
  background: ${(props) => props.theme.accent};
  box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-around;
`;

const MenuButton = styled.img`
  width: 38px;
  height: 47px;
  padding-left: 15px;
  align-self: flex-start;
`;

const NavBar = () => {
  return (
    <>
      <NavBarStyled>
        <button>hola</button>
        <button>
          <MenuButton />
        </button>
        <button>hola</button>
      </NavBarStyled>
    </>
  );
};

export default NavBar;
