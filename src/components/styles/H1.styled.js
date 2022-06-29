import styled from "styled-components";

export const H1 = styled.h1`
  margin: ${(props) => props.margin};
  font-size: ${(props) => props.fontSize};

  @media (max-width: 600px) {
    font-size: 13px;
  }
`;
