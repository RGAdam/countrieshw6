import CountryCard from "./CountryCard";
import { FlexWrapper } from "../styles/FlexWrapper.styled";
import { StyledLink } from "../styles/CountryList.styled";

const CountryList = ({ countries }) => {
  return (
    <FlexWrapper justifyContent="space-evenly">
      {countries.map((country, index) => (
        <StyledLink to={`/countries/${country.cioc}`} key={index}>
          <CountryCard country={country} />
        </StyledLink>
      ))}
    </FlexWrapper>
  );
};

export default CountryList;
