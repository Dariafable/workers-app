import { createSlice } from '@reduxjs/toolkit';
import { getWorkersData } from './actions';

const initialState = {
  workers: [],
  loading: false,
  hasError: false,
};

const workersSlice = createSlice({
  name: 'workers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getWorkersData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getWorkersData.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.workers = payload;
    });
    builder.addCase(getWorkersData.rejected, (state) => {
      state.loading = false;
      state.hasError = true;
    });
  },
});

export default workersSlice.reducer;
