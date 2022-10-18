import styled from 'styled-components';
import { FcSearch } from 'react-icons/fc';

export const NotFoundContainer = styled.div`
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Image = styled(FcSearch)`
  margin-bottom: 8px;
  width: 56px;
  height: 56px;
`;

export const Title = styled.h3`
  margin-bottom: 12px;
  font-weight: 600;
  font-size: 17px;
  line-height: 1.3;
`;

export const Text = styled.p`
  margin-bottom: 12px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.3;
  color: #97979b;
`;

export const TextUpdate = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 1.3;
  color: #6534ff;
  cursor: pointer;
`;
