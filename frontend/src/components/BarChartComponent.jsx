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
import { analysisTypes, barChartColor } from "../constants/constants";

const BarChartComponent = () => {
    const { analysisType } = useContext(AppContext);
    const [barData, setBarData] = useState([]);
    const [legendName, setLegendName] = useState("");
    const baseColor = barChartColor[analysisType];

    useEffect(() => {
        const fetchPieData = async () => {
            const fetchData = await fetch(`http://localhost:3000/${analysisType}/pie`);
            const res = await fetchData.json();

            if (res) {
                setBarData(res);
            }
        }

        switch (analysisType) {
            case analysisTypes["product"]:
                setLegendName("ServiceName")
                break;
            case analysisTypes["cloud"]:
                setLegendName("cloud")
                break;
            default:
                setLegendName("month_name");
        }

        fetchPieData();
    }, [analysisType]);

    return (
        <ResponsiveContainer width={"100%"} height={350}>
            <BarChart
                width={"100%"}
                height={350}
                data={barData}
            >
                <CartesianGrid strokeDasharray="2 2" />
                <YAxis dataKey="total_cost" />
                <XAxis dataKey={legendName} />
                <Tooltip formatter={(ServiceName) => `${ServiceName}`} />
                <Bar dataKey={"total_cost"}>
                    {barData.map((entry, i) => (
                    <Cell key={i} fill={`hsl(${baseColor}, 50%, ${analysisType === analysisTypes.cloud ? (i + 1) * 20 : i * 3}%)`} />
                    ))}
                </Bar>
                <Label />
                <Legend />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default BarChartComponent;
