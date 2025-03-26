import React, { useContext, useState } from 'react'
import { Cell, ResponsiveContainer, BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from "recharts";
import { barChartColor} from '../constants/constants';
import { AppContext } from '../App';

const HorizontalBarChart = ({ analysis, barData }) => {
    const { analysisType } = useContext(AppContext);

    console.log(barData[0]);
    

    const months = [
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ];

    const completeBarData = months.map(month => ({
        month_name: month,
        total_cost: barData.find(data => data.month_name.toLowerCase() === month.toLowerCase())?.total_cost || 0
    }));

    const baseColor = barChartColor[analysisType];

    return (
        <ResponsiveContainer width={"100%"} height={300}>
            <BarChart
                width={"100%"}
                height={350}
                data={completeBarData}
                layout='vertical'
            >
                <CartesianGrid strokeDasharray="7" />
                <XAxis type='number' dataKey="total_cost" />
                <YAxis
                    dataKey="month_name"
                    type='category'
                    interval={0}
                    width={100}
                />
                <Tooltip formatter={(ServiceName) => `${ServiceName}`} />
                <Bar dataKey={"total_cost"} fill={`hsl(${baseColor}, 50%, 50%)`}>
                    {completeBarData.map((entry, i) => (
                        <Cell key={`cell-${i}`} fill={`hsl(${baseColor}, 50%, ${(i * 5)}%)`} />
                    ))}
                    {/* <div>{completeBarData["total_cost"]}</div> */}
                </Bar>
                <Legend />
            </BarChart>
        </ResponsiveContainer>
    )
}

export default HorizontalBarChart