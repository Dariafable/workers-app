import React from 'react';

import { CategoryContainer, CategoryList, CategoryItem } from './CategoriesStyles';

const Categories = () => {
  const categories = [
    'Все',
    'Frontend',
    'Backend',
    'Android',
    'IOS',
    'QA',
    'Аналитика',
    'Дизайн',
    'Менеджмент',
    'PR',
    'HR',
    'Бэк-офис',
    'Техподдержка',
  ];

  return (
    <CategoryContainer>
      <CategoryList>
        {categories.map((categoryName, i) => (
          <CategoryItem key={i}>{categoryName}</CategoryItem>
        ))}
      </CategoryList>
    </CategoryContainer>
  );
};

export default Categories;
