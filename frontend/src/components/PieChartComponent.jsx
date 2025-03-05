import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Label,
  Legend,
  ResponsiveContainer,
} from "recharts";
// import { pieData, COLORS } from '../constants/constants.js';
// import { analysisTypes } from 'constants/constants.js'

const PieChartComponent = () => {
  const pieData = [
    { name: "Product A", value: 9.9 },
    { name: "Product B", value: 13.2 },
    { name: "Product C", value: 10.2 },
    { name: "Product D", value: 12.6 },
    { name: "Product E", value: 8.1 },
    { name: "Product F", value: 7.3 },
    { name: "Product G", value: 7.9 },
    { name: "Product H", value: 10.9 },
    { name: "Product I", value: 10.8 },
    { name: "Product J", value: 9.0 },
  ];

  const COLORS = [
    "#1b5e2",
    "#2e7d32",
    "#388e3c",
    "#43a047",
    "#4caf50",
    "#66bb6a",
    "#81c784",
    "#a5d6a7",
    "#c8e6c9",
    "#e8f5e9",
  ];
  // <div>PieChartComponent
  return (
    <ResponsiveContainer width={"100%"} height={350}>
      <PieChart width={"100%"} height={"100%"}>
        <Pie
          data={pieData}
          dataKey="value"
          innerRadius={75}
          fill="#8884d8"
          label={({ name }) => name}
        >
          {pieData.map((entry, index) => (
            <Cell key={index} fill={COLORS[index]} />
          ))}
        </Pie>
        <Label />
        <Legend layout="vertical" verticalAlign="middle" align="right" />
      </PieChart>
    </ResponsiveContainer>
  );
  // </div>
};

export default PieChartComponent;
