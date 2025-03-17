import React, { useState, useEffect, useContext } from 'react'
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
import { analysisTypes, COLORS } from '../constants/constants';
import "../CSS/LineChart.css"
import { AppContext } from '../App';


const LineChartComponent = () => {
    const { analysisType } = useContext(AppContext)
    const [lineData, setLineData] = useState(
        []
    )
    const [legendName, setLegendName] = useState("month_name")
    useEffect(() => {
        const fetchLineData = async () => {
            const fetchData = await fetch(`http://localhost:3000/${analysisType}/line`);

            const res = await fetchData.json();

            // if (res) {
            setLineData(res);
            // }
        }

        fetchLineData();

        switch (analysisType) {
            case analysisTypes["overall"]:
                setLegendName("month_name")
                break;
            case analysisTypes["team"]:
                setLegendName("TeamId")
                break;
            case analysisTypes["product"]:
                setLegendName("products")
                break;
        }




    }, [analysisType]);



    let i = 0;
    return (
        <ResponsiveContainer width={"100%"} height={300} >
            <LineChart width={300} height={500} data={lineData}>
                <CartesianGrid strokeDasharray="2" strokeOpacity={.20} />
                <XAxis dataKey={legendName} />
                <YAxis dataKey={"total_cost"} />
                <Tooltip />
                <Legend />
                <Line dataKey={"total_cost"} fill={COLORS[i]} strokeWidth={3} />
                {/* <Line dataKey={"Beta"} fill={COLORS[i++]} />
                <Line dataKey={"Gamma"} fill={COLORS[i++]} />
                <Line dataKey={"Delta"} fill={COLORS[i++]} />
                <Line dataKey={"Meu"} fill={COLORS[i++]} /> */}

            </LineChart>
        </ResponsiveContainer>
    )
}

export default LineChartComponent