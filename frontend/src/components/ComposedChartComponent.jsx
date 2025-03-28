import React, { useEffect, useState } from "react";
import {
    Cell,
    Label,
    Area,
    ResponsiveContainer,
    BarChart,
    Scatter,
    ComposedChart,
    Bar,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend
} from "recharts";
import { useContext } from "react";
import { AppContext } from "../App";
import { barChartColor } from "../constants/constants";

const BarChartComponent = () => {
    const { analysisType } = useContext(AppContext);
    const [barData, setBarData] = useState([]);

    useEffect(() => {
        const fetchPieData = async () => {
            const fetchData = await fetch(`http://localhost:3000/product/pie`);
            const res = await fetchData.json();

            if (res) {
                setBarData(res);
            }
        }

        fetchPieData();
    }, [analysisType]);

    const baseColor = barChartColor[analysisType];

    const getRandomColor = () => {
        return `hsl(${Math.floor(Math.random() * 360)}, 50%, 50%)`;
    }

    return (
        <ResponsiveContainer width={"100%"} height={350}>
            <ComposedChart width={730} height={250} data={barData}>
                <defs>
                    <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="50%" stopColor={`hsl(${baseColor}, 100%, 30%)`} stopOpacity={0.75} />
                        <stop offset="75%" stopColor={`hsl(${baseColor}, 50%, 15%)`} stopOpacity={0.75} />
                        <stop offset="100%" stopColor="#000" />
                    </linearGradient>
                </defs>
                <XAxis dataKey="ServiceName" />
                <YAxis dataKey="total_cost" />
                <Tooltip />
                <Legend />
                <CartesianGrid stroke="#ccc" strokeDasharray={10} />
                <Area dataKey="total_cost" type={"bumpY"} fill={"url(#gradient)"} stroke={`hsl(${baseColor}, 100%, 20%)`} />
                {/* <Bar dataKey="total_cost" barSize={20} fill="#413ea0" /> */}
                {/* <Line type="monotone" dataKey="uv" stroke="#ff7300" /> */}
                <Scatter data={barData} dataKey={"total_cost"} fill={`hsl(${baseColor}, 100%, 25%)`} />
            </ComposedChart>
        </ResponsiveContainer>
    );
};

export default BarChartComponent;
