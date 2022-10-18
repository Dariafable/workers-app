import React from 'react';
import ContentLoader from 'react-content-loader';

import { Skeleton } from './SkeletonStyles';

const MyLoader = () => (
  <Skeleton>
    <ContentLoader
      speed={2}
      width={280}
      height={92}
      viewBox='0 0 280 92'
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'
    >
      <rect x='98' y='25' rx='10' ry='10' width='144' height='10' />
      <rect x='99' y='48' rx='10' ry='10' width='80' height='8' />
      <circle cx='40' cy='38' r='36' />
    </ContentLoader>
  </Skeleton>
);

export default MyLoader;
