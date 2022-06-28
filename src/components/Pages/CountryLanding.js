import axios from "axios";
import { useEffect, useState } from "react";
import CountryList from "../Countries/CountryList";
import DropDownSelector from "../DropDownSelector";
import { FilterInput } from "../styles/FilterInput.styled";
import { FlexWrapper } from "../styles/FlexWrapper.styled";
import { H1 } from "../styles/H1.styled";
import { Header } from "../styles/Header.styled";
import { Wrapper } from "../styles/Wrapper.styled";

const CountryLanding = () => {
  const [loading, setLoading] = useState(true);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(
          "https://restcountries.com/v3.1/all"
        );
        setCountries(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <Wrapper>
      <Header>
        <h1 style={{ margin: 0, fontSize: 20 }}>Where in the world?</h1>
        <button type="button">Dark Mode</button>
      </Header>
      {loading && <H1>Loading</H1>}
      {!loading && (
        <Wrapper>
          <FlexWrapper justifyContent="space-between">
            <FilterInput placeholder="Search for a country..." />
            <DropDownSelector />
          </FlexWrapper>

          <CountryList countries={countries} />
        </Wrapper>
      )}
    </Wrapper>
  );
};

export default CountryLanding;
