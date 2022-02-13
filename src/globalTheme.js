import styled from "styled-components";

/*.newClass {
  position: absolute;
  right: 10px;
}*/

const Container = styled.div`
  padding-top: 85px;
  margin-bottom: 100px;
  padding-right: 22.5px;
  padding-left: 22.5px;
  background: ${(props) => props.theme.body};
`;

export default Container;
