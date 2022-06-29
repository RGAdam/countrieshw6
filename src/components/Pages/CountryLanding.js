import axios from "axios";
import { useEffect, useState } from "react";

import { FlexWrapper } from "../styles/FlexWrapper.styled";
import { H1 } from "../styles/H1.styled";
import { Header } from "../styles/Header.styled";
import { Wrapper } from "../styles/Wrapper.styled";
import { BodyWrapper } from "./CountryLanding.styeld";

import CountryList from "../Countries/CountryList";
import DarkModeButton from "../Modules/DarkModeButton";
import DropDownSelector from "../Modules/DropDownSelector";
import SearchInput from "../Modules/SearchInput";

const CountryLanding = () => {
  const [loading, setLoading] = useState(true);
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState();
  const [searchedCountries, setSearchedCountries] = useState([]);
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  const filterCountriesHandler = (value) => {
    setFilter(value);
  };

  const searchCountriesHandler = (value) => {
    let copyOfCountries = [...countries];

    setSearchedCountries(
      copyOfCountries.filter((country) =>
        country.name.common.toLowerCase().includes(value)
      )
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(
          `https://restcountries.com/v3.1/region/${filter}`
        );
        setCountries(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, [filter]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(
          "https://restcountries.com/v3.1/all"
        );
        setCountries(response);
        setSearchedCountries(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

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
        <H1 margin="0" fontSize="20">
          Where in the world?
        </H1>
        <DarkModeButton onClick={toggleTheme} theme={theme} />
      </Header>
      <FlexWrapper
        height="25px"
        minHeight="80px"
        justifyContent="space-between"
        flexWrap="wrap"
      >
        <SearchInput onSearchCountries={searchCountriesHandler} theme={theme} />
        <DropDownSelector
          onFilterCountries={filterCountriesHandler}
          theme={theme}
        />
      </FlexWrapper>
      {loading && <H1>Loading</H1>}
      {!loading && (
        <Wrapper>
          <CountryList countries={searchedCountries} theme={theme} />
        </Wrapper>
      )}
    </BodyWrapper>
  );
};

export default CountryLanding;
