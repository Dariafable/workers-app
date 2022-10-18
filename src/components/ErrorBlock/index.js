import React from 'react';

import * as Styled from './ErrorStyles';
import flyingSaucer from '../../assets/flyingSaucer.svg';

const ErrorBlock = () => {
  return (
    <Styled.ErrorContainer>
      <Styled.Image src={flyingSaucer} />
      <Styled.Title>Какой-то сверхразум все сломал</Styled.Title>
      <Styled.Text>Постараемся быстро починить</Styled.Text>
      <Styled.TextUpdate>Попробовать снова</Styled.TextUpdate>
    </Styled.ErrorContainer>
  );
};

export default ErrorBlock;
