import styled from "styled-components";

export const Image = styled.img`
  src: ${(props) => props};
  min-width: 100%;
  min-height: 100%;
  height: 150px;
  width: 100%;
  loading: lazy;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  object-fit: cover;
`;
