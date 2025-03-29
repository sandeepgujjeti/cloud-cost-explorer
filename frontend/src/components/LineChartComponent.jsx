import React, { useContext, useEffect, useState } from 'react'
import { CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from "recharts";
import { lineChartColor } from '../constants/constants';
import "../CSS/LineChart.css";
import { AppContext } from '../App';
import { analysisTypes } from '../constants/constants';


const LineChartComponent = () => {
    const { analysisType } = useContext(AppContext);
    const [lineData, setLineData] = useState([]);
    const [legendName, setLegendName] = useState("");

    useEffect(() => {
        const fetchPieData = async () => {
            const fetchData = await fetch(`http://localhost:3000/${analysisType}/line`);
            const res = await fetchData.json();
            
            if (res) {
                setLineData(res);
            }
        }

        fetchPieData();

        switch (analysisType) {
            case analysisTypes["overall"]:
                setLegendName("month_name")
                break;
            case analysisTypes["team"]:
                setLegendName("TeamId");
                break;
            case analysisTypes["product"]:
                setLegendName("ServiceName")
                break;
            default:
                setLegendName("month_name");
        }

    }, [analysisType]);

    const baseColor = lineChartColor[analysisType];

    const months = [
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ];

    // const completeLineData = months.map(month => ({
    //     month_name: month,
    //     total_cost: lineData.find(data => data.month_name.toLowerCase() === month.toLowerCase())?.total_cost || 0
    // }));

    return (
        <ResponsiveContainer width={"100%"} height={300} >
            <LineChart width={300} height={500} data={lineData}>
                <CartesianGrid strokeDasharray="10" stroke='#ccc' />
                <XAxis dataKey={legendName} />
                <YAxis dataKey={"total_cost"} />
                <Tooltip />
                <Legend />
                <Line dataKey={"total_cost"} stroke={`hsl(${baseColor},50%,50%)`} strokeWidth={3} />
            </LineChart>
        </ResponsiveContainer>
    )
}

export default LineChartComponent