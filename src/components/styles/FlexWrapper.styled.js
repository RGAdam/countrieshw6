import styled from "styled-components";

export const FlexWrapper = styled.div`
  display: flex;
  margin: ${(props) => props.margin};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  flex-direction: ${(props) => props.flexDirection};
  flex-wrap: ${(props) => props.flexWrap};
  gap: ${(props) => props.gap};
`;
