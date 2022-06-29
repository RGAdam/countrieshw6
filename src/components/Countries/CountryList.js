import { FlexWrapper } from "../styles/FlexWrapper.styled";
import { StyledLink } from "../styles/CountryList.styled";

import CountryCard from "./CountryCard";

const CountryList = ({ countries, theme }) => {
  return (
    <FlexWrapper
      justifyContent="space-evenly"
      gap="50px"
      flexWrap="wrap"
      margin="50px"
    >
      {countries.map((country, index) => (
        <StyledLink to={`/countries/${country.cioc}`} key={index}>
          <CountryCard country={country} theme={theme} />
        </StyledLink>
      ))}
    </FlexWrapper>
  );
};

export default CountryList;
