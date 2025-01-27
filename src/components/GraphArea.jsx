import React,{useState,useEffect} from "react";
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

// const data = [
//   { name: "Page A", pv: 2400, uv: 4000 },
//   { name: "Page B", pv: 1398, uv: 3000 },
//   { name: "Page C", pv: 9800, uv: 2000 },
//   { name: "Page D", pv: 3908, uv: 2780 },
//   { name: "Page E", pv: 4800, uv: 1890 },
// ];




const GraphArea = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:3000/");
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
    console.log(Object.keys(data));
    
  }, []);




  return (
    <ResponsiveContainer   width={"100%"} height={"100%"} >
    <BarChart width={"100%"} height={"100%"} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="pv" fill="#8884d8" />
      <Bar dataKey="uv" fill="#82ca9d" />
    </BarChart>
    </ResponsiveContainer>
  );
};

export default GraphArea;