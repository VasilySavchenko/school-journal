import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deletePassLesson } from '../store/toolkit/asyncActions/asyncActions';
import { putPass } from '../store/toolkit/asyncActions/asyncActions';

function getColorMapLS() {
  let colorMap;
  try {
    colorMap = JSON.parse(localStorage.getItem('colorMap'));
  } catch (error) {
    return {};
  }
  return colorMap || {};
}

function Table({ data, column }) {
  const dispatch = useDispatch();
  const [colorMap, setColorMap] = useState(getColorMapLS());

  useEffect(() => {
    localStorage.setItem('colorMap', JSON.stringify(colorMap));
  }, [colorMap]);

  const checkPasess = (coords, id, columnId, active) => {
    setColorMap({
      ...colorMap,
      [`${coords.row},${coords.col}`]: !colorMap[`${coords.row},${coords.col}`],
    });

    try {
      active
        ? dispatch(
            putPass({
              SchoolboyId: id,
              ColumnId: columnId,
              Title: 'H',
            })
          )
        : dispatch(deletePassLesson({ SchoolboyId: id, ColumnId: columnId }));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <table className="table table-bordered text-center">
        <thead className="bg-dark top-0 text-white position-sticky">
          <tr>
            <th scope="col">№</th>
            <th scope="col">Ученик</th>
            {column?.map((columnObj) => {
              return (
                <th scope="col" key={columnObj.Id}>
                  {columnObj.Title}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data?.map((dataObj, indexRow) => {
            return (
              <tr key={dataObj.Id}>
                <th scope="row">{indexRow + 1}</th>
                <td>
                  {dataObj.FirstName} {dataObj.SecondName} {dataObj.LastName}
                </td>
                {column?.map((colunmObj, indexCol) => {
                  const isExists = !colorMap[`${indexRow},${indexCol}`];

                  return (
                    <td
                      className={`${isExists ? 'bg-success' : 'bg-danger'} gf`}
                      id={dataObj.Id}
                      key={colunmObj.Id}
                      onClick={(e) => {
                        checkPasess(
                          { row: indexRow, col: indexCol },
                          Number(e.target.id),
                          colunmObj.Id,
                          isExists
                        );
                      }}
                    >
                      {isExists ? '' : 'H'}
                    </td>
                  );
                })}
              </tr>
            );
          })}
          {}
        </tbody>
      </table>
    </>
  );
}

export default Table;
