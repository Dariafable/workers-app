import React from 'react';
/* import { FiSearch, FiBarChart } from 'react-icons/fi'; */

import {
  SearchContainer,
  Title,
  FormContainer,
  SearchIcon,
  SearchForm,
  FilterIcon,
} from './SearchStyles';

const Search = () => {
  return (
    <SearchContainer>
      <Title>Поиск</Title>
      <FormContainer>
        <SearchIcon />
        <FilterIcon />
        <SearchForm placeholder='Введи имя, тег, почту...' type='text' />
      </FormContainer>
    </SearchContainer>
  );
};

export default Search;
