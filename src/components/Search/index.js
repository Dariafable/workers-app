import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSort } from '../../redux/slice/filters/filterSlice';

import * as Styled from './SearchStyles';

const Search = ({ setSearch }) => {
  const dispatch = useDispatch();
  const { sort } = useSelector((state) => state.filters);

  const [open, setOpen] = React.useState(false);

  const sortCategoryHandler = (value) => {
    dispatch(setSort(value));
    setOpen(!open);
  };

  const modalHandler = () => {
    setOpen(!open);
  };

  return (
    <Styled.SearchContainer>
      <Styled.Title>Search</Styled.Title>
      <Styled.FormContainer>
        <Styled.SearchIcon />
        <Styled.SortIcon onClick={modalHandler} />
        <Styled.SearchForm
          onChange={({ target }) => setSearch(target.value)}
          placeholder='Enter name, tag, position...'
          type='text'
        />
      </Styled.FormContainer>

      {open && (
        <Styled.Modal>
          <Styled.SortContainer>
            <Styled.SortTitle>Sorting by</Styled.SortTitle>
            <Styled.CloseIcon onClick={modalHandler} />
            <Styled.InputContainer>
              <Styled.RadioInput
                onChange={({ target }) => sortCategoryHandler(target.value)}
                type='radio'
                name='sortBy'
                value='alphabet'
                checked={sort === 'alphabet'}
              />
              alphabet
            </Styled.InputContainer>

            <Styled.InputContainer>
              <Styled.RadioInput
                onChange={({ target }) => sortCategoryHandler(target.value)}
                type='radio'
                name='sortBy'
                value='birthday'
                checked={sort === 'birthday'}
              />
              birthday
            </Styled.InputContainer>
          </Styled.SortContainer>
        </Styled.Modal>
      )}
    </Styled.SearchContainer>
  );
};

export default Search;
