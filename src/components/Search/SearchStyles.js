import styled from 'styled-components';
import { FiSearch, FiBarChart } from 'react-icons/fi';

export const SearchContainer = styled.header`
  margin: 16px 16px 8px;
`;

export const Title = styled.h2`
  margin: 0 0 8px 8px;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.2;
`;

export const FormContainer = styled.div`
  position: relative;
`;

export const SearchIcon = styled(FiSearch)`
  position: absolute;
  opacity: 0.3;
  top: 16px;
  left: 10px;
`;

export const FilterIcon = styled(FiBarChart)`
  position: absolute;
  opacity: 0.3;
  top: 16px;
  right: 10px;
  transform: rotate(-90deg);
  cursor: pointer;
`;

export const SearchForm = styled.input`
  width: 100%;
  margin: 6px 0;
  padding: 8px 12px;
  padding-left: 32px;

  background: #f7f7f8;
  border-radius: 16px;
  border: 0.5px solid rgba(70, 70, 70, 0);

  font-weight: 500;
  font-size: 15px;
  line-height: 1.3;

  ::placeholder {
    color: #c3c3c6;
  }

  :focus::-webkit-input-placeholder {
    color: transparent;
  }

  :focus,
  :hover,
  :active {
    outline: none;
    border: 0.5px solid rgba(70, 70, 70, 0.3);
  }
`;
