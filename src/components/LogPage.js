import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
  dataSelector,
  columnSelector,
  rateSelector,
} from '../store/selectors/selectors';

import {
  fetchData,
  fetchColumn,
  fetchRate,
} from '../store/toolkit/slice/asyncActions/asyncActions';

import Table from './Table';
import LoadingSpinner from './icons/Spinner';

function LogPage() {
  const dispatch = useDispatch();
  const data = useSelector(dataSelector);
  const column = useSelector(columnSelector);
  const rate = useSelector(rateSelector);
  const loading = useSelector((state) => state.toolkit.status);

  useEffect(() => {
    dispatch(fetchColumn());
    dispatch(fetchData());
    dispatch(fetchRate());
  }, [dispatch]);
  return (
    <>
      {loading === 'loading' ? (
        <LoadingSpinner />
      ) : (
        <Table data={data} column={column} rate={rate} />
      )}
    </>
  );
}
export default LogPage;
