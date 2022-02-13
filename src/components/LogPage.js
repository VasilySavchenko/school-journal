import React from 'react';
import { useSelector } from 'react-redux';
import Table from './Table';
import LoadingSpinner from './icons/Spinner';

function LogPage({ data, column, rate }) {
  const loading = useSelector((state) => state.toolkit.status);

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
