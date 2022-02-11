import { createSlice } from '@reduxjs/toolkit';
import {
  fetchData,
  fetchColumn,
  fetchRate,
} from '../slice/asyncActions/asyncActions';

const initialState = {
  data: null,
  status: null,
  error: null,
  column: null,
  rate: null,
  rateId: null,
  columnInfo: null,
};
const toolkitReducer = createSlice({
  name: 'data',
  initialState,
  reducers: {
    datagetRateId: (state, action) => {
      state.rateId = state.rate?.filter((obj) => {
        return obj.ColumnId === action.payload;
      });
    },
    dataGetPasses: (state) => {
      state.columnInfo = state.rateId.reduce(function (acc, item) {
        if (item.Title === 'Н' || item.Title === 'H') {
          acc['pasess'] = (acc[item.Title] || 0) + 1;
        }
        acc[item.Title] = (acc[item.Title] || 0) + 1;
        return acc;
      }, {});
    },
  },

  extraReducers: {
    [fetchData.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchData.fulfilled]: (state, action) => {
      state.status = true;
      state.data = action.payload;
    },
    [fetchData.rejected]: (state, action) => {
      state.status = false;
      state.error = action.payload;
    },
    [fetchColumn.fulfilled]: (state, action) => {
      state.column = action.payload;
    },
    [fetchRate.fulfilled]: (state, action) => {
      state.rate = action.payload;
    },
  },
});
export const { datagetRateId, dataGetPasses } = toolkitReducer.actions;

export default toolkitReducer.reducer;
