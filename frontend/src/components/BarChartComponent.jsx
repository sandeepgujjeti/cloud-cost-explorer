import React, { useEffect, useState } from "react";
import {
    Cell,
    Label,
    ResponsiveContainer,
    BarChart,
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

    return (
        <ResponsiveContainer width={"100%"} height={350}>
            <BarChart
                width={"100%"}
                height={350}
                data={barData}
            >
                <CartesianGrid strokeDasharray="2 2" />
                <YAxis dataKey="total_cost" />
                <XAxis dataKey="ServiceName" />
                <Tooltip formatter={(ServiceName) => `${ServiceName}`} />
                <Bar dataKey={"total_cost"}>
                    {barData.map((entry, i) => (
                        <Cell key={`cell-${i}`} fill={`hsl(${baseColor}, 50%, ${i * 2}%)`} />
                    ))}
                </Bar>
                <Label />
                <Legend />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default BarChartComponent;
