import React from 'react';
import {
  Profiles,
  ProfileItem,
  Photo,
  WorkerInfo,
  Right,
  Name,
  Abb,
  Work,
  Left,
} from './WorkersStyles';

const Workers = () => {
  return (
    <Profiles>
      <ProfileItem>
        <Photo>
          <img src='https://placehold.co/72x72' alt=''></img>
        </Photo>
        <WorkerInfo>
          <Right>
            <Name>
              Алексей Миногаров <Abb>mi</Abb>
            </Name>
            <Work>Analyst</Work>
          </Right>
          <Left>
            <p>29 июн</p>
          </Left>
        </WorkerInfo>
      </ProfileItem>
    </Profiles>
  );
};

export default Workers;
