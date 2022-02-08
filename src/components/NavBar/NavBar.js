import styled from "styled-components";

const NavBarStyled = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 65px;
  background: #461094;
  box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-around;
`;

const NavBar = () => {
  return (
    <>
      <NavBarStyled>
        <button>hola</button>
        <button>hola</button>
        <button>hola</button>
      </NavBarStyled>
    </>
  );
};

export default NavBar;
