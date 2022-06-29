import { Link } from "react-router-dom";
import styled from "styled-components";
import { FlexWrapper } from "../styles/FlexWrapper.styled";
import { Wrapper } from "../styles/Wrapper.styled";

export const StyledFlexWrapper = styled(FlexWrapper)`
  @media (max-width: 600px) {
    flex-direction: column;
    margin: 0 0 0 0;
    align-items: flex-start;
  }
`;

export const BodyWrapper = styled(Wrapper)`
  height: 100%;
  min-height: 100vh;
  overflow: auto;

  color: ${(props) =>
    props.theme === "dark" ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"};
  background-color: ${(props) =>
    props.theme === "dark" ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 98%)"};
`;

export const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: inherit;
`;
