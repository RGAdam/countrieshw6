import { useParams } from "react-router-dom";
import { Wrapper } from "../styles/Wrapper.styled";
import { useState, useEffect, Children } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import { Header } from "../styles/Header.styled";
import { Image } from "../styles/Image.styled";
import { FlexWrapper } from "../styles/FlexWrapper.styled";

const CountryDetails = () => {
  const [loading, setLoading] = useState(true);
  const [country, setCountry] = useState([]);

  let params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(
          `https://restcountries.com/v3.1/alpha/${params.countryId}`
        );

        setCountry(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, [params]);

  return (
    <Wrapper>
      <Header>
        <h1 style={{ margin: 0, fontSize: 20 }}>Where in the world?</h1>
        <button type="button">Dark Mode</button>
      </Header>

      <Link to="/">
        <button type="button">Back</button>
      </Link>

      <FlexWrapper flexDirection="row">
        <Image width="400px" height="250px" src={country[0]?.flags.svg} />
        <FlexWrapper flexDirection="column">
          <FlexWrapper flexDirection="column">
            <h1>{country[0]?.name?.common}</h1>
            <p>Native Names: Placeholder</p>
            <p>Population: {country[0]?.population}</p>
            <p>Region: {country[0]?.region}</p>
            <p>Sub Region: {country[0]?.subregion}</p>
            <p>Capital: {country[0]?.capital}</p>
          </FlexWrapper>
          <FlexWrapper>
            <p>Top Level Domain: {country[0]?.tld}</p>
            <p>Currencies: Placeholder</p>
            <p>Languages: Placeholder</p>
          </FlexWrapper>
        </FlexWrapper>
      </FlexWrapper>
    </Wrapper>
  );
};
export default CountryDetails;
