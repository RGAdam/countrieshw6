import { useParams } from "react-router-dom";
import { Wrapper } from "../styles/Wrapper.styled";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

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
      <Link to="/">
        <button type="button">Back</button>
      </Link>
      <h1>{country[0]?.name?.common}</h1>
    </Wrapper>
  );
};

export default CountryDetails;
