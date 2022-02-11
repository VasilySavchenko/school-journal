import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
  fetchData,
  fetchColumn,
  fetchRate,
} from '../store/asyncActons/asyncActions';

import Table from './Table';

function MainPage() {
  const data = useSelector((state) => state.toolkit.data);
  const column = useSelector((state) => state.toolkit.column);
  const rate = useSelector((state) => state.toolkit.rate);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchColumn());
    dispatch(fetchData());
    dispatch(fetchRate());
  }, []);
  return (
    <>
      <Table data={data} column={column} rate={rate} />
    </>
  );
}
export default MainPage;
