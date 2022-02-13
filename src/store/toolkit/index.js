import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { routerReducer } from 'react-router-redux';
import toolkitReducer from './slices/toolkitReducerSlice';

const rootReduser = combineReducers({
  routing: routerReducer,
  toolkit: toolkitReducer,
});

const store = configureStore({
  reducer: rootReduser,
});

export { store };
