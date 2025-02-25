import React from 'react'
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

const LineChartComponent = () => {
    const data = [
        { "name": "Jan", "value": 400 },
        { "name": "Feb", "value": 300 },
        { "name": "Mar", "value": 500 },
        { "name": "Apr", "value": 700 },
        { "name": "May", "value": 600 },
        { "name": "Jun", "value": 800 },
        { "name": "Jul", "value": 900 }
      ]
    return (
        <section className="graph-area overflow-x-hidden">
            {/* <ResponsiveContainer width={"500px"} height={"500px"} > */}

                {
                    <LineChart width={"500px"} height={"500px"} data={data}>
                        <CartesianGrid strokeDasharray="2" strokeOpacity={.20} />
                        <XAxis dataKey={"name"} />
                        <YAxis dataKey={"value"} />
                        <Tooltip />
                        <Legend />
                        <Line dataKey={"value"} fill="#8884d8" />
                    </LineChart>
                }
            {/* </ResponsiveContainer> */}
        </section >
    )
}

export default LineChartComponent