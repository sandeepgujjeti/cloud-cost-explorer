import { useEffect, useState } from 'react';
import '../CSS/TableArea.css';
import { tableData } from '../constants/constants';

const TableAreaComponent = () => {
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await fetch("http://localhost:3000/?analysis=team&teamid=Finance");
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       const data = await response.json();
  //       setData(data);
  //     } catch (error) {
  //       console.error('Fetch error:', error);
  //     }
  //   }

  //   fetchData();
  // }, []);

  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            { tableData[0].map((header, i) => (
              <th key={i}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          { tableData.slice(1).map((row, i) => (
            <tr key={i}>
              { row.map((cell, j) => (
                <td key={j}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableAreaComponent;
