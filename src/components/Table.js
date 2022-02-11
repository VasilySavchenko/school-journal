import React from 'react';

function Table({ data, column }) {
  function checkPlayer(e) {
    if (e.target.innerText === '') {
      e.target.innerText = 'H';
      e.target.className = 'bg-danger';
      localStorage.setItem('color', 'red');
    } else if (e.target.innerText === 'H') {
      e.target.innerText = '';
      e.target.className = 'bg-success';
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
                {column?.map((obje) => {
                  return (
                    <td
                      className="bg-success gf"
                      key={obje.Id}
                      onClick={(e) => {
                        checkPlayer(e);
                      }}
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
