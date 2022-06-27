import styled from "styled-components";

export const FlexWrapper = styled.div`
  margin: 50px;
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems}
  flex-direction: ${(props) => props.flexDirection};
  gap: ${(props) => props.gap};
`;
