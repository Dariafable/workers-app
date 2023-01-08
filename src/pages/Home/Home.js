import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory } from '../../redux/slice/filters/filterSlice';
import { getWorkersData } from '../../redux/slice/workers/actions';
import { debaunced, sortData } from '../../utils/helpers';

import Search from '../../components/Search';
import Categories from '../../components/Categories';
import Skeleton from '../../components/Workers/Skeleton';
import Workers from '../../components/Workers';
import ErrorPage from '../ErrorPage';
import NotFound from '../NotFound';

import { HomeContainer } from './HomeStyles';

const Home = () => {
  const { category, sort } = useSelector((state) => state.filters);
  const { workers, loading, hasError } = useSelector((state) => state.workers);
  const dispatch = useDispatch();

  const [items, setItems] = React.useState([]);
  const [search, setSearch] = React.useState('');

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
    const sortedWorkers = sortData(sort, items);
    setItems(sortedWorkers);
  }, [sort]);

  React.useEffect(() => {
    workers && debaunced(() => searchWorker(), 300);
  }, [search, workers]);

  const searchWorker = () => {
    setItems(
      workers.filter(
        (worker) =>
          `${worker.firstName} ${worker.lastName}`
            .toLocaleLowerCase()
            .includes(search.trim().toLocaleLowerCase()) ||
          worker.userTag.toLocaleLowerCase().includes(search.trim().toLocaleLowerCase()) ||
          worker.position.toLocaleLowerCase().includes(search.trim().toLocaleLowerCase())
      )
    );
  };

  return (
    <HomeContainer>
      <Search setSearch={setSearch} />
      <Categories onChangeCategory={onChangeCategory} />
      {loading ? skeletons : workersItem}
      {hasError ? <ErrorPage /> : null}
      {search && !hasError && !items.length ? <NotFound /> : null}
    </HomeContainer>
  );
};

export default Home;
