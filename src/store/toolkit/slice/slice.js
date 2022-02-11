import { createSlice } from '@reduxjs/toolkit';
import {
  fetchData,
  fetchColumn,
  fetchRate,
} from '../../asyncActons/asyncActions';

const initialState = {
  data: null,
  status: null,
  error: null,
  column: null,
  rate: null,
  rate1: null,
};
const newReducer = createSlice({
  name: 'data',
  initialState,
  reducers: {
    datagetRateId: (state, action) => {
      state.rate1 = state.rate?.filter((obj) => {
        return obj.ColumnId === action.payload;
      });
    },
  },

  extraReducers: {
    [fetchData.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchData.fulfilled]: (state, action) => {
      state.status = 'True';
      state.data = action.payload;
    },
    [fetchData.rejected]: (state, action) => {},
    [fetchColumn.fulfilled]: (state, action) => {
      state.column = action.payload;
    },
    [fetchRate.fulfilled]: (state, action) => {
      state.rate = action.payload;
    },
  },
});
export const { datagetRateId } = newReducer.actions;
export default newReducer.reducer;
