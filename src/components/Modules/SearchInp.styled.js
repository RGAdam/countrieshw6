import styled from "styled-components";
import { FlexWrapper } from "../styles/FlexWrapper.styled";

export const SearchInp = styled.input`
  margin-left: 10px;
  border: none;
  border-radius: 5px;
  min-width: 90%;

  color: ${(props) =>
    props.theme === "dark" ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"};
  background-color: ${(props) =>
    props.theme === "dark" ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)"};

  @media (max-width: 400px) {
    margin-left: 5%;
    width: 85%;
  }
`;

export const StyledFlexWrapper = styled(FlexWrapper)`
  color: ${(props) =>
    props.theme === "dark" ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"};
  background-color: ${(props) =>
    props.theme === "dark" ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)"};
`;
