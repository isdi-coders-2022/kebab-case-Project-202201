import styled from "styled-components";

const Container = styled.div`
  background-color: rgba(98, 0, 238, 0.38);
  position: fixed;
  bottom: 65px;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;
const Menu = styled.h2`
  background-color: ${(props) => props.theme.accentAlt2};
  width: 350px;
  height: 56px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;

const MenuToggle = ({ action }) => {
  return (
    <>
      <Container>
        <Menu onClick={action}>SORT</Menu>
        <Menu onClick={action}>FILTER</Menu>
        <Menu onClick={action}>SEARCH</Menu>
      </Container>
    </>
  );
};
export default MenuToggle;
