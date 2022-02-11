import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { routerReducer } from 'react-router-redux';
import toolkitReducer from './slice/slice';

const rootReduser = combineReducers({
  routing: routerReducer,
  toolkit: toolkitReducer,
});

const store = configureStore({
  reducer: rootReduser,
});

export { store };
