import React from 'react'
import {
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
    LineChart,
    Line
} from "recharts";
import { lineChartdata, COLORS } from '../constants/constants';
import "../CSS/LineChart.css"


const LineChartComponent = () => {
    let i = 0;
    return (
        <ResponsiveContainer width={"100%"} height={300} >
            <LineChart width={300} height={500} data={lineChartdata}>
                <CartesianGrid strokeDasharray="2" strokeOpacity={.20} />
                <XAxis dataKey={"month"} />
                <YAxis dataKey={"Alpha"} />
                <Tooltip />
                <Legend />
                <Line dataKey={"Alpha"} fill={COLORS[i]} strokeWidth={3} />
                {/* <Line dataKey={"Beta"} fill={COLORS[i++]} />
                <Line dataKey={"Gamma"} fill={COLORS[i++]} />
                <Line dataKey={"Delta"} fill={COLORS[i++]} />
                <Line dataKey={"Meu"} fill={COLORS[i++]} /> */}

            </LineChart>
        </ResponsiveContainer>
    )
}

export default LineChartComponent