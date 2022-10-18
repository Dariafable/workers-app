import styled from 'styled-components';
import { FiSearch, FiBarChart } from 'react-icons/fi';
import { AiFillCloseCircle } from 'react-icons/ai';

export const SearchContainer = styled.header`
  margin-bottom: 8px;
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

export const SortIcon = styled(FiBarChart)`
  position: absolute;
  color: rgba(70, 70, 70, 0.3);
  top: 16px;
  right: 10px;
  transform: rotate(-90deg);
  transition: color 0.2s linear;
  cursor: pointer;

  :hover {
    color: #6534ff;
  } /* еще нужно сделать, чтобы цвет оставался в активном состоянии сортировки}  */
`;

export const SearchForm = styled.input`
  width: 100%;
  margin: 6px 0;
  padding: 8px 12px;
  padding-left: 32px;

  background: #f8f8f8;
  border-radius: 16px;
  border: 0.5px solid rgba(70, 70, 70, 0);
  transition: border 0.1s linear;

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

export const Modal = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(57, 53, 53, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
`;

export const SortContainer = styled.div`
  padding: 24px 16px;
  max-width: 330px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 6;

  background-color: white;
  border-radius: 20px;
  /* border: 1px solid #6534ff; */

  font-weight: 500;
  font-size: 16px;
  line-height: 20px;

  div:last-child {
    margin-bottom: 0;
  }
`;

export const SortTitle = styled.h3`
  margin-bottom: 24px;
  text-align: center;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.1;
`;

export const CloseIcon = styled(AiFillCloseCircle)`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 24px;
  right: 24px;
  cursor: pointer;
  color: rgba(195, 195, 198, 0.5);
  transition: color 0.2s linear;

  :hover {
    color: rgba(195, 195, 198, 0.7);
  }
`;

export const InputContainer = styled.div`
  margin-bottom: 30px;
  display: flex;
  align-items: center;
`;

export const RadioInput = styled.input`
  -webkit-appearance: none;
  appearance: none;
  margin-right: 8px;
  width: 20px;
  height: 20px;
  border: 2px solid #6534ff;
  border-radius: 50%;
  transition: border 0.1s linear;

  :checked,
  :hover {
    border: 6px solid #6534ff;
  }
`;
