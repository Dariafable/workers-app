import { configureStore } from '@reduxjs/toolkit';
import filters from './slice/filters/filterSlice';
import workers from './slice/workers/workersSlice';

export const store = configureStore({
  reducer: {
    filters,
    workers,
  },
});
