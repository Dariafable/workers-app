import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory } from '../../redux/slice/filters/filterSlice';
import { getWorkersData } from '../../redux/slice/workers/actions';
import { sortData } from '../../utils/helpers';

import Search from '../../components/Search';
import Categories from '../../components/Categories';
import Skeleton from '../../components/Workers/Skeleton';
import Workers from '../../components/Workers';

import { HomeContainer } from './HomeStyles';

const Home = () => {
  const { category, sort } = useSelector((state) => state.filters);
  const { workers, loading } = useSelector((state) => state.workers);
  const dispatch = useDispatch();

  const [items, setItems] = React.useState([]);

  const onChangeCategory = (department) => {
    dispatch(setCategory(department));
  };

  const workersItem = items.map((obj) => <Workers key={obj.id} {...obj} />);
  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);

  React.useEffect(() => {
    setItems(workers);
  }, [workers]);

  React.useEffect(() => {
    dispatch(getWorkersData(category));
  }, [category]);

  React.useEffect(() => {
    const sortedWorders = sortData(sort, items);
    setItems(sortedWorders);
  }, [sort]);

  return (
    <HomeContainer>
      <Search />
      <Categories /* value={category} */ onChangeCategory={onChangeCategory} />
      {loading ? skeletons : workersItem}
    </HomeContainer>
  );
};

export default Home;
