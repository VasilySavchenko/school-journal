import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { datagetRateId } from '../store/toolkit/slice/slice';

function LessonStatisticsTable() {
  const dispatch = useDispatch();
  const d = useSelector((state) => state.toolkit.rate1);
  const column = useSelector((state) => state.toolkit.column);
  const data = useSelector((state) => state.toolkit.data);

  const r = d?.filter((item) => {
    return item.Title === 'Н';
  });
  console.log(d);
  return (
    <>
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
            <td>{r?.length}</td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">Оценки 5</th>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">Оценки 4</th>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">Оценки 3</th>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">Оценки 2</th>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">Оценки 1</th>
            <td> </td>
            <td> </td>
          </tr>
        </tbody>
      </table>
      {column?.map((obj) => {
        return (
          <button
            key={obj.Id}
            onClick={() => {
              dispatch(datagetRateId(obj.Id));
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
