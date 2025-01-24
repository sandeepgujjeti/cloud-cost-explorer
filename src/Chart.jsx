import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";

export default function Chart() {
    const data = [
        { "id": "A", "value": 45 },
        { "id": "B", "value": 78 },
        { "id": "C", "value": 60 },
        { "id": "D", "value": 50 },
        { "id": "E", "value": 130 },
        { "id": "F", "value": 55 }
    ]

    return (
        <>
            <BarChart width={400} height={400} data={data}>
                <CartesianGrid />
                <XAxis dataKey="id" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#abcdef"/>
            </BarChart>
        </>
    )
} 