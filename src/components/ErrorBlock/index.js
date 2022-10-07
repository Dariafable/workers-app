import React from 'react';

import { ErrorContainer, Image, Title, Text, TextUpdate } from './ErrorStyles';
import flyingSaucer from '../../assets/flyingSaucer.svg';

const ErrorBlock = () => {
  return (
    <ErrorContainer>
      <Image src={flyingSaucer}></Image>
      <Title>Какой-то сверхразум все сломал</Title>
      <Text>Постараемся быстро починить</Text>
      <TextUpdate>Попробовать снова</TextUpdate>
    </ErrorContainer>
  );
};

export default ErrorBlock;
