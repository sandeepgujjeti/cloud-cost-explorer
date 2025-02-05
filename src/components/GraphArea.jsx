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
  LineChart,
  Line
} from "recharts";
import Dropdown from './Dropdown';
import { analysisTypes } from "../constants/contants";

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
  
  const graphTypes = [
    analysisType
  ]

  return (
    <>
      <section className="graph-area overflow-x-hidden">
        <ResponsiveContainer width={"100%"} height={"100%"} >
          {
            analysisType === analysisTypes.team &&
            < BarChart width={"100%"} height={"100%"} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="servicename" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="billedcapacity" fill="#8884d8" />
            </BarChart>
          }
          {
            analysisType === analysisTypes.service &&
            <LineChart width={"70vw"} height={"40vh"} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="servicename" />
              <YAxis domain={['auto', 'auto']} tickFormatter={(value) => value.toLocaleString()} />
              <Tooltip />
              <Legend />
              <Line type={"monotone"} dataKey="billedcapacity" />
            </LineChart>
          }
        </ResponsiveContainer>
      </section >
      <section className="dropdown-area">
        <Dropdown analysisType={analysisType} />
      </section>
    </>
  );
};

export default GraphArea;