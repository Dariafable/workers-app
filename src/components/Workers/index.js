import React from 'react';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import { useSelector } from 'react-redux';

import WorkerItem from '../../pages/WorkerItem/WorkerItem';

import * as Styled from './WorkerStyles';

const Workers = ({ id, avatarUrl, firstName, lastName, userTag, position, birthday }) => {
  const birthDay = dayjs(birthday).format('DD MMM');
  const { sort } = useSelector((state) => state.filters);

  return (
    <Link to={`/workerItem/${id}`} element={<WorkerItem />}>
      <Styled.Profiles>
        <Styled.ProfileItem>
          <Styled.Photo src={avatarUrl} alt='' />
          <Styled.WorkerInfo>
            <Styled.Right>
              <Styled.Name>
                {firstName} {lastName} <Styled.Abb>{userTag}</Styled.Abb>
              </Styled.Name>
              <Styled.Work>{position}</Styled.Work>
            </Styled.Right>
            {sort === 'birthday' && (
              <Styled.Left>
                <p>{birthDay}</p>
              </Styled.Left>
            )}
          </Styled.WorkerInfo>
        </Styled.ProfileItem>
      </Styled.Profiles>
    </Link>
  );
};

export default Workers;
