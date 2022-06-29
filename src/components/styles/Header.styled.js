import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  padding: 20px 50px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);

  @media (max-width: 600px) {
    padding: 15px 25px;
  }
`;
