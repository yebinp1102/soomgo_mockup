import React from 'react';
import styledComponents from 'styled-components';
import SearchBar from './SearchBar';
import FilterICons from './FilterIcons';
import FilterSuggest from './FilterSuggest';
import { useParams } from 'react-router-dom';

const Search = () => {
  const {field} = useParams();
  console.log(field);
  return (
    <SearchWrap>
      <SearchBar
        title={field}
      />
      <FilterICons/>
      <FilterSuggest />
    </SearchWrap>
  )
}

export default Search

const SearchWrap = styledComponents.div`
  display: flex;
  flex-direction: column;
`;