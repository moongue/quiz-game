import React from 'react';
import './TableScore.scss';
import data from '../../api/tableScore';

export const TableScore = () => (
  <div className="table-score">
    <h2>Рейтинг</h2>
    <div className="table">
      <table>
        <tbody>
          <tr>
            <th>Имя игрока</th>
            <th>За день</th>
            <th>За месяц</th>
            <th>За все время</th>
          </tr>
          {data.map((item, index) => (
            <tr key={index}>
              <td>
                <span>{index + 1}.</span>
                {item.name}
              </td>
              <td>{item.dayScore}</td>
              <td>{item.monthScore}</td>
              <td>{item.generalScore}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default TableScore;
