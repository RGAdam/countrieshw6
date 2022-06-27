import styled from "styled-components";

export const FlexWrapper = styled.div`
  margin: 50px;
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  flex-direction: row;
  flex-wrap: wrap;
  gap: 50px;
`;
