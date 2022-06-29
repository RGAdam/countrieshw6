import styled from "styled-components";

export const FlexWrapper = styled.div`
  display: flex;
  margin: ${(props) => props.margin};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  flex-direction: ${(props) => props.flexDirection};
  flex-wrap: ${(props) => props.flexWrap};
  gap: ${(props) => props.gap};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  min-height: ${(props) => props.minHeight};
  border-radius: ${(props) => props.borderRadius};
  box-shadow: ${(props) => props.boxShadow};
  background-color: ${(props) => props.backgroundColor};
  padding: ${(props) => props.padding};
`;
