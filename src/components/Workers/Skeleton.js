import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = () => (
  <ContentLoader
    speed={2}
    width={280}
    height={500}
    viewBox='0 0 280 500'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
  >
    <rect x='124' y='57' rx='10' ry='10' width='144' height='16' />
    <rect x='126' y='83' rx='10' ry='10' width='80' height='12' />
    <circle cx='72' cy='72' r='54' />

    {/* <rect x="124" y="57" rx="10" ry="10" width="144" height="16" /> 
    <rect x="126" y="83" rx="10" ry="10" width="80" height="12" /> 
    <circle cx="58" cy="71" r="54" /> */}
  </ContentLoader>
);

export default MyLoader;
