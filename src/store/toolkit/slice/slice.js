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
  passes: null,
  scoreFive: null,
  scoreFour: null,
  scoreThree: null,
  scoreTwo: null,
};
const newReducer = createSlice({
  name: 'data',
  initialState,
  reducers: {
    datagetRateId: (state, action) => {
      state.rateId = state.rate?.filter((obj) => {
        return obj.ColumnId === action.payload;
      });
    },
    dataGetPasses: (state, action) => {
      state.passes = state.rateId.filter((obj) => {
        return obj.Title === 'Н';
      });
    },
    dataGetScoreFive: (state, action) => {
      state.scoreFive = state.rateId.filter((obj) => {
        return obj.Title === '5';
      });
    },
    dataGetScoreFour: (state, action) => {
      state.scoreFour = state.rateId.filter((obj) => {
        return obj.Title === '4';
      });
    },
    dataGetScoreThree: (state, action) => {
      state.scoreThree = state.rateId.filter((obj) => {
        return obj.Title === '3';
      });
    },
    dataGetScoreTwo: (state, action) => {
      state.scoreTwo = state.rateId.filter((obj) => {
        return obj.Title === '2';
      });
    },
    dataGetScoreOne: (state, action) => {
      state.scoreOne = state.rateId.filter((obj) => {
        return obj.Title === '1';
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
export const {
  datagetRateId,
  dataGetPasses,
  dataGetScoreFive,
  dataGetScoreFour,
  dataGetScoreThree,
  dataGetScoreTwo,
  dataGetScoreOne,
} = newReducer.actions;

export default newReducer.reducer;
