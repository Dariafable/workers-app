import React, { useEffect } from 'react';

import Search from '../components/Search';
import Categories from '../components/Categories';
import Workers from '../components/Workers';
import axios from 'axios';

const Home = () => {
  /*   const [workers, setWorkers] = React.useState([]);

/ React.useEffect(() => {
    axios
      .get('')
      .then((res) => {
        setWorkers();
      });
  }, []);  */

  return (
    <>
      <Search />
      <Categories />
      <Workers />
    </>
  );
};

export default Home;
