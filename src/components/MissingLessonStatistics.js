import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  columnSelector,
  dataSelector,
  columnInfoSelector,
} from '../store/selectors/selectors';
import {
  dataGetMissingLesson,
  datagetRateId,
} from '../store/toolkit/slices/toolkitReducerSlice';

function StatisticsTable() {
  const dispatch = useDispatch();
  const columnInfo = useSelector(columnInfoSelector);
  const column = useSelector(columnSelector);
  const data = useSelector(dataSelector);
  const rate = useSelector((state) => state.toolkit.rate);
  console.log({ rate });
  return (
    <>
      {columnInfo ? (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Параметр</th>
              <th scope="col">Значение</th>
              <th scope="col">Примечание</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Количество Учеников</th>
              <td>{data?.length}</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">Количество Пропусков</th>
              <td>{!columnInfo['H'] ? '0' : columnInfo['H']}</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      ) : (
        <div className="select-column fs-2 text">Выбереите Колонку </div>
      )}
      <div className="d-flex justify-content-center">
        {column?.map((columnObj) => {
          return (
            <button
              className="btn btn-dark ms-1"
              key={columnObj.Id}
              onClick={() => {
                dispatch(datagetRateId(columnObj.Id));
                dispatch(dataGetMissingLesson());
              }}
            >
              Данные {columnObj.Title}
            </button>
          );
        })}
      </div>
    </>
  );
}

export default StatisticsTable;
