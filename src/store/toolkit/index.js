import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { routerReducer } from 'react-router-redux';
import newReducer from './slice/slice';

const rootReduser = combineReducers({
  routing: routerReducer,
  toolkit: newReducer,
});

const store = configureStore({
  reducer: rootReduser,
});

export { store };
