import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { sortData } from '../../../utils/helpers';

export const getWorkersData = createAsyncThunk(
  '@@filters/getWorkers',
  async (category, { getState }) => {
    const { filters } = getState();
    const { data } = await axios.get(
      `https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=${
        category || 'all'
      }`
    );
    return sortData(filters.sort, data.items);
  }
);
