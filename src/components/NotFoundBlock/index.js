import React from 'react';

import * as Styled from './NotFoundBlockStyles';

const NotFoundBlock = () => {
  return (
    <Styled.NotFoundContainer>
      <Styled.Image />
      <Styled.Title>Мы никого не нашли</Styled.Title>
      <Styled.Text>Попробуй скорректировать запрос</Styled.Text>
    </Styled.NotFoundContainer>
  );
};

export default NotFoundBlock;
