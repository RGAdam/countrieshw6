import { SearchInp, StyledFlexWrapper } from "./SearchInp.styled";
import Icon from "./Icon";

const SearchInput = ({ onSearchCountries, theme }) => {
  const onSearchChangeHandler = (event) => {
    onSearchCountries(event.target.value);
  };

  return (
    <StyledFlexWrapper
      height="25px"
      width="300px"
      padding=" 10px"
      borderRadius="5px"
      boxShadow="0 1px 10px rgba(0, 0, 0, 0.25)"
      backgroundColor="hsl(0, 0%, 100%)"
      margin="0 5% 0 5%"
      theme={theme}
    >
      <Icon source="magnifying-glass" />
      <SearchInp
        placeholder="Search for a country..."
        onChange={onSearchChangeHandler}
        theme={theme}
      />
    </StyledFlexWrapper>
  );
};

export default SearchInput;
