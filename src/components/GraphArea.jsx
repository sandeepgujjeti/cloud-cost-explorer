import React, { useState, useEffect } from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer,
} from "recharts";
import Dropdown from './Dropdown';

const GraphArea = ({ analysisType }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:3000/?columns=servicename&columns=billedamount`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    }
    fetchData();

  }, [analysisType]);

  return (
    <>
      <section className="graph-area">
        <ResponsiveContainer width={"100%"} height={"100%"} >
          <BarChart width={"100%"} height={"100%"} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="servicename" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="billedamount" fill="#8884d8" />
            {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
          </BarChart>
        </ResponsiveContainer>
      </section>
      <section className="dropdown-area">
        <Dropdown analysisType={analysisType} />
      </section>
    </>
  );
};

export default GraphArea;