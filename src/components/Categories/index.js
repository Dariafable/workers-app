import React from 'react';
import { useSelector } from 'react-redux';

import * as Styled from './CategoriesStyles';

const Categories = ({ onChangeCategory }) => {
  const { category: categoryFilter } = useSelector((state) => state.filters);

  const categories = [
    { code: 'all', name: 'All' },
    { code: 'frontend', name: 'Frontend' },
    { code: 'backend', name: 'Backend' },
    { code: 'android', name: 'Android' },
    { code: 'ios', name: 'IOS' },
    { code: 'qa', name: 'QA' },
    { code: 'analytics', name: 'Analytics' },
    { code: 'design', name: 'Design' },
    { code: 'hr', name: 'HR' },
    { code: 'pr', name: 'PR' },
    { code: 'back_office', name: 'Back office' },
    { code: 'support', name: 'Tech support' },
  ];

  return (
    <Styled.CategoryContainer>
      <Styled.CategoryList>
        {categories.map((category, index) => (
          <Styled.CategoryItem
            isActive={category.code === categoryFilter}
            onClick={() => onChangeCategory(category.code)}
            key={category.code}
          >
            {category.name}
          </Styled.CategoryItem>
        ))}
      </Styled.CategoryList>
    </Styled.CategoryContainer>
  );
};

export default Categories;
