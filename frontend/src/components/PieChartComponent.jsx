import React, { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Label,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { analysisTypes, pieChartColors } from "../constants/constants";
import { useContext } from "react";
import { AppContext } from "../App";

const PieChartComponent = () => {
  const { analysisType, setAnalysisType } = useContext(AppContext);
  const baseColor = pieChartColors[analysisType];
  const [legendName, setLegendName] = useState("");

  const [pieData, setPieData] = useState([
    { name: "name_1", value: 100 },
    { name: "name_2", value: 200 },
    { name: "name_3", value: 300 },
    { name: "name_4", value: 400 },
    { name: "name_5", value: 500 },
    { name: "name_6", value: 600 },
    { name: "name_7", value: 700 },
  ]);

  useEffect(() => {
    const fetchPieData = async () => {
      const fetchData = await fetch(`http://localhost:3000/${analysisType}/pie`);

      const res = await fetchData.json();

      // if (res) {
      setPieData(res);
      // }
    }

    fetchPieData();

    switch (analysisType) {
      case analysisTypes["overall"]:
        setLegendName("month_name")
        break;
      case analysisTypes["team"]:
        setLegendName("TeamId")
        break;
      case analysisTypes["product"]:
        setLegendName("ServiceName")
        break;
    }


  }, [analysisType]);

  console.log(pieData);


  return (
    <ResponsiveContainer width={"100%"} height={350}>
      <PieChart width={"100%"} height={"100%"}>
        <Pie
          data={pieData}
          dataKey="total_cost"
          innerRadius={75}
          fill={baseColor}
          label={({ name, total_cost }) => total_cost}
        >
          {pieData.map((entry, index) => (
            <Cell key={index} fill={`hsl(${baseColor},50%, ${10 * index / 2}%)`} />
          ))}
        </Pie>
        <Label />
        {
          analysisType !== analysisTypes["Product"]
          && 
          <Legend
          layout="vertical"
          verticalAlign="top"
          align="right"
          payload={pieData.map((entry, index) => ({
            // value: entry[legendName],
            value: entry[legendName],
            // type: "square",
            color: `hsl(${baseColor},50%, ${10 * index / 2}%)`,
            id: entry.name,
          }))}
        />}
      </PieChart>
    </ResponsiveContainer>
  );
  // </div>
};

export default PieChartComponent;
