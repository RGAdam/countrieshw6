import styled from "styled-components";

export const Ico = styled.img`
  width: 15px;

  filter: ${(props) => (props.theme === "dark" ? "invert(1)" : "none")};
`;
