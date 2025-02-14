import './GraphArea.css'
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
import AxesDropdown from './AxesDropdown';
import { analysisTypes } from "../constants/contants";

const GraphArea = ({ analysisType }) => {
  const [data, setData] = useState([]);
  const [column, setColumn] = useState("billedcapacity");
  const [axisValue, setAxisValue] = useState({
    x: "Finance",
    y: "billedcapacity"
  });

  console.log(axisValue);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:3000/?analysis=team&teamid=Finance`);
        // const response = await fetch(`http://localhost:3000/`);

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

  }, [analysisType, axisValue]);

  return (
    <>
      <section className="graph-area overflow-x-hidden">
        <ResponsiveContainer width={"100%"} height={"100%"} >
          {
            analysisType === analysisTypes.team &&
            <BarChart width={"100%"} height={"100%"} data={data}>
              <CartesianGrid strokeDasharray="2" strokeOpacity={.20} />
              <XAxis dataKey={`${axisValue.x}`} />
              <YAxis dataKey={`${axisValue.y}`} />
              <Tooltip />
              <Legend />
              <Bar dataKey={column} fill="#8884d8" />
            </BarChart>
          }
          {
            analysisType === analysisTypes.service &&
            <LineChart width={"100%"} height={"100%"} data={data}>
              <CartesianGrid strokeDasharray="2" strokeOpacity={.20} />
              <XAxis dataKey={`${axisValue.x}`} />
              <YAxis dataKey={`${axisValue.y}`} />
              <Tooltip />
              <Legend />
              <Line dataKey={column} fill="#8884d8" />
            </LineChart>
          }
        </ResponsiveContainer>
      </section >
      <section className="dropdown-area">
        {/* <AxesDropdown axis={"X"} axisValue={axisValue} setAxisValue={setAxisValue} />
        <AxesDropdown axis={"Y"} axisValue={axisValue} setAxisValue={setAxisValue} />
        <Dropdown analysisType={analysisType} setColumn={setColumn} /> */}

        <AxesDropdown axis={"X"} axisValue={axisValue} setAxisValue={setAxisValue} />
        <AxesDropdown axis={"Y"} axisValue={axisValue} setAxisValue={setAxisValue} />
        <Dropdown analysisType={analysisType} setColumn={setColumn} />
      </section>
    </>
  );
};

export default GraphArea;