import { useEffect, useState, useContext } from "react";
import "../CSS/TableArea.css";
import { AppContext } from "../App";

const Table = () => {
  const [data, setData] = useState([{}]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { analysisType } = useContext(AppContext);

  useEffect(() => {
    const fetchTableData = async () => {
      setLoading(true);
      setError(null);

      try {
        const fetchedData = await fetch(`http://localhost:3000/${analysisType}/table`);
        const res = await fetchedData.json();
        setData(res);
      } catch (error) {
        console.log("There was an error fetching Table Data", error);
      }
    };

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

export default Table;
