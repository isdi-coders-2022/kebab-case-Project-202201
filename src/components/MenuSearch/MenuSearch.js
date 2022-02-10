import styled from "styled-components";

const Container = styled.div`
  background-color: rgba(98, 0, 238, 0.38);
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;
const Menu = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;
const Input = styled.input`
  background-color: rgba(0, 0, 0, 0.6);
  width: 350px;
  height: 56px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;

const MenuSearch = () => {
  return (
    <>
      <Container>
        <Menu onSubmit={() => {}}> SEARCH </Menu>
        <Input />
      </Container>
    </>
  );
};
export default MenuSearch;
