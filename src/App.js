import { Provider } from 'react-redux';
import { store } from './store/toolkit';
import './App.css';
import MainPage from './components/LogPage';
import LessonStatisticsTable from './components/LessoStatistics';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route path="/sta" element={<LessonStatisticsTable />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
