import React from 'react';
import { Link } from 'react-router-dom';

import Home from '../Home/Home';

import * as Styled from './WorkerItemStyles';

const WorkItem = () => {
  return (
    <>
      <Styled.Top>
        <Link to='/' element={<Home />}>
          <Styled.BackArrow />
        </Link>
        <Styled.WorkerPhoto src='https://placehold.co/104x104' alt='' />
        <Styled.Name>
          Алиса Иванова <Styled.Abb>al</Styled.Abb>
        </Styled.Name>
        <Styled.Work>Designer</Styled.Work>
      </Styled.Top>

      <Styled.Bottom>
        <Styled.BirthInfo>
          <Styled.Birth>
            <Styled.BirthIcon />
            <Styled.Date>5 июня 1996</Styled.Date>
          </Styled.Birth>
          <Styled.Age>
            <p>24 года</p>
          </Styled.Age>
        </Styled.BirthInfo>

        <Styled.PhoneInfo>
          <Styled.PhoneIcon />
          <Styled.Number>+7 (999) 900 90 90</Styled.Number>
        </Styled.PhoneInfo>
      </Styled.Bottom>
    </>
  );
};

export default WorkItem;
