import './TableArea.css';
import { data } from '../data/tabledata';

const TableArea = () => {
  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            {Object.keys(data[0]).map((col, i) => (
              <th key={i}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              {Object.values(row).map((record, rId) => (
                <td key={rId}>{record}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableArea;