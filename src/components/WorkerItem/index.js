import React from 'react';

import {
  Top,
  BackArrow,
  Name,
  Abb,
  Work,
  Bottom,
  BirthInfo,
  Birth,
  BirthIcon,
  Date,
  Age,
  PhoneInfo,
  PhoneIcon,
  Number,
} from './WorkerItemStyles';

const WorkItem = () => {
  return (
    <>
      <Top>
        <BackArrow />
        <div>
          <img src='https://placehold.co/104x104' alt=''></img>
        </div>
        <Name>
          Алиса Иванова <Abb>al</Abb>
        </Name>
        <Work>Designer</Work>
      </Top>

      <Bottom>
        <BirthInfo>
          <Birth>
            <BirthIcon />
            <Date>5 июня 1996</Date>
          </Birth>
          <Age>
            <p>24 года</p>
          </Age>
        </BirthInfo>

        <PhoneInfo>
          <PhoneIcon />
          <Number>+7 (999) 900 90 90</Number>
        </PhoneInfo>
      </Bottom>
    </>
  );
};

export default WorkItem;
