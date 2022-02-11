import React from 'react';

function Table({ data, column, rate }) {
  function checkPlayer(e) {
    if (e.target.innerText === '') {
      e.target.innerText = 'H';
      e.target.style.background = 'red';
    } else if (e.target.innerText === 'H') {
      e.target.innerText = '';
      e.target.style.background = 'green';
    }
  }

  return (
    <>
      <table className="table table-bordered text-center">
        <thead
          className="bg-dark"
          style={{
            position: 'sticky',
            top: '0',
            color: 'white',
          }}
        >
          <tr>
            <th scope="col">№</th>
            <th scope="col">Ученик</th>
            {column?.map((objc) => {
              return (
                <th scope="col" key={objc.Id}>
                  {objc.Title}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data?.map((obj, index) => {
            return (
              <tr key={obj.Id}>
                <th scope="row">{index + 1}</th>
                <td>
                  {obj.FirstName} {obj.SecondName} {obj.LastName}
                </td>
                {column?.map((obje, index) => {
                  return (
                    <td
                      key={obje.Id}
                      onClick={(e) => {
                        checkPlayer(e);
                      }}
                      style={{ background: 'green' }}
                    ></td>
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
