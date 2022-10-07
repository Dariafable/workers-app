import styled from 'styled-components';
import { FiStar, FiPhone } from 'react-icons/fi';
import { MdArrowBackIosNew } from 'react-icons/md';

export const Top = styled.div`
  position: relative;
  width: 100%;
  height: 40vh;
  padding: 60px 0 32px;
  background-color: #f7f7f8;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BackArrow = styled(MdArrowBackIosNew)`
  position: absolute;
  top: 28px;
  left: 30px;
  z-index: 1;
  width: 16px;
  height: 14px;
  cursor: pointer;
`;

export const Name = styled.h2`
  margin-bottom: 12px;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.2;
`;

export const Abb = styled.span`
  font-weight: 400;
  font-size: 17px;
  line-height: 1.3;
  color: #97979b;
`;

export const Work = styled.p`
  font-weight: 400;
  font-size: 13px;
  line-height: 1.2;
  color: #55555c;
`;

export const Bottom = styled.div`
  margin: 8px 20px 8px 16px;
`;

export const BirthInfo = styled.div`
  padding: 18px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f7f7f8;
`;

export const Birth = styled.div`
  display: flex;
`;

export const BirthIcon = styled(FiStar)`
  margin-right: 14px;
  width: 20px;
  height: 20px;
`;

export const Date = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.3;
`;

export const Age = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.3;
  color: #97979b;
`;

export const PhoneInfo = styled.div`
  padding: 18px 0;
  display: flex;
`;

export const PhoneIcon = styled(FiPhone)`
  margin-right: 14px;
  width: 20px;
  height: 20px;
`;

export const Number = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.3;
`;
