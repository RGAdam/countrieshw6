import styled from "styled-components";

export const Image = styled.img`
  src: ${(props) => props.src};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  loading: lazy;
  border-top-right-radius: ${(props) => props.borderRadius};
  border-top-left-radius: ${(props) => props.borderRadius};
  object-fit: cover;
`;
