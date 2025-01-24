import { Bar, BarChart, CartesianGrid, PieChart, Tooltip, XAxis, YAxis ,Pie} from "recharts";

export default function Chart() {
    const data = [
        { "id": "A", "value": 45 },
        { "id": "B", "value": 78 },
        { "id": "C", "value": 60 },
        { "id": "D", "value": 50 },
        { "id": "E", "value": 130 },
        { "id": "F", "value": 55 }
    ]

    const a=[23,34,56,76,52];
    return (        
        <>
            <PieChart width={400} height={400} >
                
                <Tooltip />
                <Pie  data={data} dataKey       ="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8"/>
            </PieChart>
        </>
    )
} 