import styled from "styled-components";

export const Button = styled.button`
  background-color: hsl(0, 0%, 100%);
  color: hsl(200, 15%, 8%);
  border: 0px solid;
  border-radius: 5px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.25);
  transition: 0.5s;
  align-text: center;

  &:hover {
    cursor: pointer;
    background-color: gray;
  }
`;
