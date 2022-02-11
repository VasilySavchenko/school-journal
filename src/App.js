import { Provider, useSelector } from 'react-redux';
import { store } from './store/toolkit';
import './App.css';
import MainPage from './components/MainPage';
import LessonStatisticsTable from './components/LessoStatistics';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/sta" element={<LessonStatisticsTable />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
