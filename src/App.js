import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import WorkerItem from './pages/WorkerItem/WorkerItem';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/workerItem' element={<WorkerItem />}>
          <Route path=':workerItemId' element={<WorkerItem />} />
        </Route>
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
