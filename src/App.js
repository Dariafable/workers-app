import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import ErrorBlock from './components/ErrorBlock';

/* import Categories from './components/Categories';
import Search from './components/Search';
import WorkItem from './components/WorkerItem';
import Workers from './components/Workers'; */

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<ErrorBlock />} />
      </Routes>
    </>
  );
}

export default App;
