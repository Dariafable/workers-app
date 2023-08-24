import dayjs from 'dayjs';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import reserve from '../../assets/reserve.svg';

import Home from '../Home/Home';
import { pluralize, formatNumber } from '../../utils/helpers';

import * as Styled from './WorkerItemStyles';

const PLACEHOLDER_IMAGE = 'https://placehold.co/104x104';

const WorkItem = () => {
  const { workers } = useSelector((state) => state.workers);
  const { workerItemId } = useParams('workerItemId');

  const [item, setItem] = React.useState();

  React.useEffect(() => {
    workers && setItem(workers.filter((worker) => worker.id === workerItemId)[0]);
  }, [workers, workerItemId]);

  return item ? (
    <>
      <Styled.Top>
        <Link to='/' element={<Home />}>
          <Styled.BackArrow />
        </Link>
        <Styled.WorkerPhoto src={/* item.avatarUrl ||  */ reserve} alt='' />
        <Styled.Name>
          {`${item.firstName} ${item.lastName}`} <Styled.Abb>{item.userTag}</Styled.Abb>
        </Styled.Name>
        <Styled.Work>{item.position}</Styled.Work>
      </Styled.Top>

      <Styled.Bottom>
        <Styled.BirthInfo>
          <Styled.Birth>
            <Styled.BirthIcon />
            <Styled.Date>{dayjs(item.birthday).format('DD MMMM YYYY')}</Styled.Date>
          </Styled.Birth>
          <Styled.Age>
            <p>{dayjs().diff(dayjs(item.birthday), 'year')} years</p>
            {/* for russin version
             <p>{pluralize(dayjs().diff(dayjs(item.birthday), 'year'))}</p> */}
          </Styled.Age>
        </Styled.BirthInfo>

        <Styled.PhoneInfo>
          <Styled.PhoneIcon />
          <Styled.Number>{formatNumber(item.phone)}</Styled.Number>
        </Styled.PhoneInfo>
      </Styled.Bottom>
    </>
  ) : null;
};

export default WorkItem;
