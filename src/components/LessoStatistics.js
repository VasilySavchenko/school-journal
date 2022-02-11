import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  columnSelector,
  dataSelector,
  columnInfoSelector,
} from '../store/selectors/selectors';
import { datagetRateId, dataGetPasses } from '../store/toolkit/slice/slice';

function LessonStatisticsTable() {
  const dispatch = useDispatch();
  const columnInfo = useSelector(columnInfoSelector);
  const column = useSelector(columnSelector);
  const data = useSelector(dataSelector);

  return (
    <>
      {columnInfo ? (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Параметр</th>
              <th scope="col">Знвчение</th>
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
              <td>{columnInfo['pasess']}</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">Оценки 5</th>
              <td>{!columnInfo[5] ? 0 : columnInfo[5]}</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">Оценки 4</th>
              <td>{!columnInfo[4] ? 0 : columnInfo[4]}</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">Оценки 3</th>
              <td>{!columnInfo[3] ? 0 : columnInfo[3]}</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">Оценки 2</th>
              <td>{!columnInfo[2] ? 0 : columnInfo[2]}</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">Оценки 1</th>
              <td>{!columnInfo[1] ? 0 : columnInfo[1]}</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      ) : (
        'Выберете Колонку'
      )}
      {column?.map((obj) => {
        return (
          <button
            className="btn btn-dark ms-1"
            key={obj.Id}
            onClick={() => {
              dispatch(datagetRateId(obj.Id));
              dispatch(dataGetPasses());
            }}
          >
            Данные {obj.Title}
          </button>
        );
      })}
    </>
  );
}

export default LessonStatisticsTable;
