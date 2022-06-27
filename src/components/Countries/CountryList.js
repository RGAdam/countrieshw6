import CountryCard from "./CountryCard";
import { FlexWrapper } from "../styles/FlexWrapper.styled";
import { Link } from "react-router-dom";

const CountryList = ({ countries }) => {
  return (
    <FlexWrapper>
      {countries.map((country, index) => (
        <Link to={`/countries/${country.cioc}`} key={index}>
          <CountryCard country={country} />
        </Link>
      ))}
    </FlexWrapper>
  );
};

export default CountryList;
