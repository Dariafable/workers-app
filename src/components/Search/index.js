import React from 'react';
import { useDispatch } from 'react-redux';
import { setSort } from '../../redux/slice/filters/filterSlice';

import * as Styled from './SearchStyles';

const Search = () => {
  const dispatch = useDispatch();

  //Modal states
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
        <Styled.SortIcon onClick={() => modalHandler()} />
        <Styled.SearchForm placeholder='Enter name, tag, email...' type='text' />
      </Styled.FormContainer>

      {open && (
        <Styled.Modal>
          <Styled.SortContainer onChange={({ target }) => sortCategoryHandler(target.value)}>
            <Styled.SortTitle>Sorting by</Styled.SortTitle>
            <Styled.CloseIcon onClick={modalHandler} />
            <Styled.InputContainer>
              <Styled.RadioInput
                type='radio'
                name='sortBy'
                value='alphabet' /* defaultChecked */ /* нужно, чтобы кнопка была активна в активном состоянии sort */
              />
              <label>alphabet</label>
            </Styled.InputContainer>

            <Styled.InputContainer>
              <Styled.RadioInput type='radio' name='sortBy' value='birthday' />
              <label>birthday</label>
            </Styled.InputContainer>
          </Styled.SortContainer>
        </Styled.Modal>
      )}
    </Styled.SearchContainer>
  );
};

export default Search;
