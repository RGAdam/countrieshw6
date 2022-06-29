import styled from "styled-components";

export const Button = styled.button`
  border: 0px solid;
  border-radius: 5px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.25);
  transition: 0.5s;
  align-text: center;
  display: flex;
  justify-content: space-around;
  align-items: center;

  color: ${(props) =>
    props.theme === "dark" ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"};
  background-color: ${(props) =>
    props.theme === "dark" ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)"};

  &:hover {
    cursor: pointer;
    background-color: gray;
  }
`;
