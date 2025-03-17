import { useEffect, useState } from 'react';
import '../CSS/TableArea.css';
import { tableData } from '../constants/constants';
import { AppContext } from '../App';
import { useContext } from 'react';

const TableAreaComponent = () => {
  const [data, setData] = useState([{}]);
  const { analysisType } = useContext(AppContext);

  useEffect(() => {
    const fetchTableData = async () => {
      try {
        const fetchedData = await fetch(`http://localhost:3000/${analysisType}/table`);
        const res = await fetchedData.json();
        setData(res);
        console.log("Table Data", res);
      } catch (error) {
        console.log("There was an error fetching Table Data", error);
      }
    }
    
    fetchTableData();
  }, [analysisType]);

  return (
    <div className="table-wrapper">
      {/* <table>
        <thead>
          <tr>
            {data[0].map((header, i) => (
              <th key={i}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.slice(1).map((row, i) => (
            <tr key={i}>
              {row.forEach((cell, j) => (
                <td key={j}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table> */}
      <table>
        <thead>
          <tr>
            {Object.keys(data[0]).map((key, i) => (
              <th key={i}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              {Object.keys(row).map((cell, j) => (
                <td key={j}>{row[cell]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableAreaComponent;
