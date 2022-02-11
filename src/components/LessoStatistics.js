import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  columnSelector,
  dataSelector,
  passesSelector,
  scoreFiveSelector,
  scoreFourSelector,
  scoreOneSelector,
  scoreThreeSelector,
  scoreTwoSelector,
} from '../store/selectors/selectors';
import {
  datagetRateId,
  dataGetPasses,
  // dataGetScoreFive,
  // dataGetScoreFour,
  // dataGetScoreThree,
  // dataGetScoreTwo,
  // dataGetScoreOne,
} from '../store/toolkit/slice/slice';

function LessonStatisticsTable() {
  const dispatch = useDispatch();
  const passes = useSelector(passesSelector);
  const scoreFive = useSelector(scoreFiveSelector);
  const scoreFour = useSelector(scoreFourSelector);
  const scoreThree = useSelector(scoreThreeSelector);
  const scoreTwo = useSelector(scoreTwoSelector);
  const scoreOne = useSelector(scoreOneSelector);
  const column = useSelector(columnSelector);
  const data = useSelector(dataSelector);

  console.log(scoreThree);

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
            <td>{passes?.length}</td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">Оценки 5</th>
            <td>{scoreFive?.length}</td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">Оценки 4</th>
            <td>{scoreFour?.length}</td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">Оценки 3</th>
            <td>{scoreThree?.length}</td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">Оценки 2</th>
            <td>{scoreTwo?.length}</td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">Оценки 1</th>
            <td>{scoreOne?.length}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
      {column?.map((obj) => {
        return (
          <button
            className="btn btn-dark ms-1"
            key={obj.Id}
            onClick={() => {
              dispatch(datagetRateId(obj.Id));
              dispatch(dataGetPasses());
              // dispatch(dataGetScoreFive());
              // dispatch(dataGetScoreFour());
              // dispatch(dataGetScoreThree());
              // dispatch(dataGetScoreTwo());
              // dispatch(dataGetScoreOne());
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
