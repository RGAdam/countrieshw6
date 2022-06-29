import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import { Header } from "../styles/Header.styled";
import { Image } from "../styles/Image.styled";
import { FlexWrapper } from "../styles/FlexWrapper.styled";
import { H1 } from "../styles/H1.styled";
import { Paragraph } from "../styles/Paragraph.styled";
import { Button } from "../styles/Button.styled";
import { StyledLink } from "../styles/CountryList.styled";
import { Wrapper } from "../styles/Wrapper.styled";
import {
  BodyWrapper,
  CountryNameH1,
  StyledFlexWrapper,
} from "./CountryDetails.styled";

import Icon from "../Modules/Icon";
import DarkModeButton from "../Modules/DarkModeButton";

const CountryDetails = () => {
  const [loading, setLoading] = useState(true);
  const [country, setCountry] = useState([]);
  const [nativeNames, setNativeNames] = useState("");
  const [currencies, setCurrencies] = useState("");
  const [languages, setLanguages] = useState("");
  const [borders, setBorders] = useState("");
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

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

  const getNativeNames = () => {
    const nativeNamesByLanguages = country[0]?.name?.nativeName;
    let nativeNames = [];

    for (let language in nativeNamesByLanguages) {
      nativeNames?.push(nativeNamesByLanguages[language]);
    }

    const output = nativeNames.map((language) => language.official);

    setNativeNames(output.join(", "));
  };

  const getCurrencies = () => {
    const currenciesByNames = country[0]?.currencies;
    let currencies = [];

    for (let currency in currenciesByNames) {
      currencies?.push(currenciesByNames[currency]);
    }

    const output = currencies.map((currency) => currency.name);

    setCurrencies(output.join(", "));
  };

  const getLanguages = () => {
    const languagesByNames = country[0]?.languages;
    let languages = [];

    for (let language in languagesByNames) {
      languages?.push(languagesByNames[language]);
    }

    setLanguages(languages.join(", "));
  };

  const getBorders = () => {
    const borders = country[0]?.borders;

    setBorders(borders);
  };

  useEffect(() => {
    getNativeNames();
    getCurrencies();
    getLanguages();
    getBorders();
    // eslint-disable-next-line
  }, [country]);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <BodyWrapper theme={theme}>
      <Header>
        <H1 margin="0" fontSize="25px">
          Where in the world?
        </H1>
        <DarkModeButton onClick={toggleTheme} theme={theme} />
      </Header>

      <StyledLink to="/">
        <Button
          type="button"
          margin="0 0 30px 50px"
          width="75px"
          height="35px"
          theme={theme}
        >
          <Icon source="arrow-left" theme={theme} />
          Back
        </Button>
      </StyledLink>

      {loading && <h2>Loading</h2>}
      {!loading && (
        <StyledFlexWrapper
          flexDirection="row"
          alignItems="flex-start"
          justifyContent="space-around"
        >
          <Image width="450px" height="300px" src={country[0]?.flags.svg} />
          <FlexWrapper
            flexDirection="column"
            alignItems="space-around"
            margin="0 0 0 0"
          >
            <CountryNameH1 margin="0 0 25px 0">
              {country[0]?.name?.common}
            </CountryNameH1>
            <StyledFlexWrapper
              flexDirection="row"
              alignItems="flex-start"
              justifyContent="space-between"
            >
              <StyledFlexWrapper flexDirection="column">
                <Paragraph margin="10px 0">
                  <b>Native Names:</b> {nativeNames}
                </Paragraph>
                <Paragraph margin="10px 0">
                  <b>Population:</b> {country[0]?.population}
                </Paragraph>
                <Paragraph margin="10px 0">
                  <b>Region:</b> {country[0]?.region}
                </Paragraph>
                <Paragraph margin="10px 0">
                  <b>Sub Region:</b> {country[0]?.subregion}
                </Paragraph>
                <Paragraph margin="10px 0">
                  <b>Capital:</b> {country[0]?.capital}
                </Paragraph>
              </StyledFlexWrapper>
              <StyledFlexWrapper flexDirection="column" margin="0 0 0 0">
                <Paragraph margin="10px 0">
                  <b>Top Level Domain:</b> {country[0]?.tld}
                </Paragraph>
                <Paragraph margin="10px 0">
                  <b>Currencies:</b> {currencies}
                </Paragraph>
                <Paragraph margin="10px 0">
                  <b>Languages:</b> {languages}
                </Paragraph>
              </StyledFlexWrapper>
            </StyledFlexWrapper>
            <FlexWrapper alignItems="center">
              <Paragraph margin="0 20px 0 0">
                <b>Border Countries:</b>
              </Paragraph>
              <FlexWrapper flexWrap="wrap">
                {borders?.map((border, index) => (
                  <StyledLink to={`/countries/${border}`} key={index}>
                    <Button
                      type="button"
                      width="75px"
                      height="35px"
                      margin="20px"
                      theme={theme}
                    >
                      {border}
                    </Button>
                  </StyledLink>
                ))}
              </FlexWrapper>
            </FlexWrapper>
          </FlexWrapper>
        </StyledFlexWrapper>
      )}
    </BodyWrapper>
  );
};
export default CountryDetails;
