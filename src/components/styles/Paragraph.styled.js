import styled from "styled-components";

export const Paragraph = styled.p`
  margin: ${(props) => props.margin};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};

  @media (max-width: 500px) {
    margin: 0 30px;
  }
`;
