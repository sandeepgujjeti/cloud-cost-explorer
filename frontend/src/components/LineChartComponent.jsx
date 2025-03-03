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
import { lineChartdata, COLORS } from '../constants/constants';
import "../CSS/LineChart.css"


const LineChartComponent = () => {

    let i = 0; 
    return (
        <section className="line-chart-wrapper">
            <ResponsiveContainer width={500} height={500} >
                <LineChart width={"500px"} height={"500px"} data={lineChartdata}>
                    <CartesianGrid strokeDasharray="2" strokeOpacity={.20} />
                    <XAxis dataKey={"month"} />
                    <YAxis dataKey={"Alpha"} />
                    <Tooltip />
                    <Legend />
                    <Line dataKey={"Alpha"} fill={COLORS[i]}/>
                    <Line dataKey={"Beta"} fill={COLORS[i++]} />
                    <Line dataKey={"Gamma"} fill={COLORS[i++]} />
                    <Line dataKey={"Delta"} fill={COLORS[i++]} />
                    <Line dataKey={"Meu"} fill={COLORS[i++]} />
                </LineChart>
            </ResponsiveContainer>
        </section >
    )
}

export default LineChartComponent