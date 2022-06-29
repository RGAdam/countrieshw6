import styled from "styled-components";

export const DarkModeButt = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100px;

  border: none;

  color: ${(props) =>
    props.theme === "dark" ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"};
  background-color: ${(props) =>
    props.theme === "dark" ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 98%)"};
`;
