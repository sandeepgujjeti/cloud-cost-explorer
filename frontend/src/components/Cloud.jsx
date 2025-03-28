import { useState, useEffect } from 'react';
import TableAreaComponent from "./Table";
import BarChartComponent from "./BarChartComponent";
import HorizontalBarChart from "./HorizontalBarChart";
import PieChartComponent from './PieChartComponent';
import "../CSS/cloud.css"

const Cloud = () => {
    const [clouds, setClouds] = useState([]);
    const [cloudData, setCloudData] = useState([]);

    useEffect(() => {
        const fetchCloudData = async () => {
            try {
                const result = await fetch("http://localhost:3000/individual-cloud");
                const data = await result.json();
                if (data) {
                    setCloudData(data);
                    const fetchedData = Array.from(new Set(data.map((obj) => obj.cloud)));
                    // const fetchedData = Array.from(new Set(data.map((obj) => console.log(obj))));
                    console.log("fetchedData", fetchedData);
                    setClouds(fetchedData);
                }
            } catch (error) {
                console.error("Error fetching Cloud data:", error);
            }
        };


        fetchCloudData();
    }, []);

    return (
        <main className="cloud-wrapper">
            <section className="content-wrapper">
                <section>
                    {/* <PieChartComponent /> */}
                    {/* <BarChartComponent /> */}
                    {/* <ComposedChartComponent /> */}
                    <PieChartComponent />
                </section>

                <section className="line-chart-wrapper">
                    {/* <LineChartComponent /> */}
                    <BarChartComponent />
                </section>
            </section>

            <section className="table-area-wrapper">
                <TableAreaComponent />
            </section>

            <section className="individual-cloud-wrapper">
                {clouds.map((item, i) => (
                    <div key={i} className="individual-cloud">
                        <div className="cloud">{item}</div>
                        {console.log(item)}
                        
                        <HorizontalBarChart
                            barData={cloudData
                                .filter((serviceObj) => serviceObj.cloud === item)
                                .map((serviceObj) => ({
                                    month_name: serviceObj.month_name,
                                    total_cost: serviceObj.total_cost,
                                }))}
                        />

                    </div>
                ))
                }
            </section>
        </main>)
}

export default Cloud