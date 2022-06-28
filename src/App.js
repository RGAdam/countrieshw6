import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import axios from "axios";

import CountryList from "./components/Countries/CountryList";
import { Wrapper } from "./components/styles/Wrapper.styled";
import { Header } from "./components/styles/Header.styled";
import { FilterInput } from "./components/styles/FilterInput.styled";
import { FlexWrapper } from "./components/styles/FlexWrapper.styled";
import DropDownSelector from "./components/DropDownSelector";
import { H1 } from "./components/styles/H1.styled";

function App() {
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
}

export default App;
