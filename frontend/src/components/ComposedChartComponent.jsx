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

const BarChartComponent = () => {
    const { analysisType } = useContext(AppContext);
    const [barData, setBarData] = useState([]);

    useEffect(() => {
        const fetchPieData = async () => {
            // const fetchData = await fetch(`http://localhost:3000/${analysisType}`);
            const fetchData = await fetch(`http://localhost:3000/product/pie`);
            const res = await fetchData.json();

            if (res) {
                setBarData(res);
            }
        }

        fetchPieData();
    }, [analysisType]);

    const baseColor = 300;

    const getRandomColor = () => {
        return `hsl(${Math.floor(Math.random() * 360)}, 50%, 50%)`;
    }

    return (
        <ResponsiveContainer width={"100%"} height={350}>
            <ComposedChart width={730} height={250} data={barData}>
                <defs>
                    <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="75%" stopColor={getRandomColor()} stopOpacity={0.95} />
                        <stop offset="100%" stopColor="#0a0a0a" stopOpacity={0.9} />
                    </linearGradient>
                </defs>
                <XAxis dataKey="ServiceName" />
                <YAxis dataKey="total_cost" />
                <Tooltip />
                <Legend />
                <CartesianGrid stroke="#ccc" strokeDasharray={10} />
                <Area dataKey="total_cost" type={"bumpY"} fill={"url(#gradient)"} stroke={getRandomColor()} />
                {/* <Bar dataKey="total_cost" barSize={20} fill="#413ea0" /> */}
                {/* <Line type="monotone" dataKey="uv" stroke="#ff7300" /> */}
                <Scatter data={barData} dataKey={"total_cost"} fill={getRandomColor()} />
            </ComposedChart>
        </ResponsiveContainer>
    );
};

export default BarChartComponent;
