import { Wrapper } from "../styles/Wrapper.styled";
import { Image } from "../styles/Image.styled";
import { CardWrapper } from "../styles/CardWrapper.styled";

const CountryCard = ({ country }) => {
  console.log(country);
  return (
    <CardWrapper>
      <Wrapper width="250px" height="150px">
        {country && <Image src={country?.flags?.svg} />}
      </Wrapper>

      <h3>{country?.name?.common}</h3>
      <p>Population: {country?.population}</p>
      <p>Region: {country?.region}</p>
      <p>Capital: {country?.capital}</p>
    </CardWrapper>
  );
};

export default CountryCard;
