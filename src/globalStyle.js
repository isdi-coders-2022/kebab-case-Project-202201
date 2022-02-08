import styled from "styled-components";

export const Title = styled.h3`
  color: #060;
`;

export const Text = styled.p`
  color: red;
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
`;

export const theme = {
  mainColor: "#060",
  secondaryColor: "#000",
};
