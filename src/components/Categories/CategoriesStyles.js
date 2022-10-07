import styled from 'styled-components';

export const CategoryContainer = styled.div`
  margin: 0 16px;
`;

export const CategoryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;

  font-weight: 500;
  font-size: 15px;
  line-height: 1.3;
  color: #97979b;
  border-bottom: 1px solid #c3c3c6;
`;

export const CategoryItem = styled.li`
  position: relative;
  padding: 8px 12px;
  cursor: pointer;
  transition: color 0.1s linear;
  :hover,
  :active {
    color: #050510;
  }

  :after {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    border-bottom: 2px solid #6534ff;
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1;
    opacity: 0;
    transition: opacity 0.1s linear;
  }
  :hover:after,
  :active:after {
    opacity: 1;
  }
`;
