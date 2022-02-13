import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import LogPage from './components/LogPage';
import StatisticsTable from './components/MissingLessonStatistics';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Header from './components/Header';
import {
  fetchData,
  fetchColumn,
  fetchRate,
} from './store/toolkit/asyncActions/asyncActions';

import {
  dataSelector,
  columnSelector,
  rateSelector,
} from '../src/store/selectors/selectors';

function App() {
  const data = useSelector(dataSelector);
  const column = useSelector(columnSelector);
  const rate = useSelector(rateSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchColumn());
    dispatch(fetchData());
    dispatch(fetchRate());
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={<LogPage data={data} column={column} rate={rate} />}
        />
        <Route path="/statistics" element={<StatisticsTable />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
