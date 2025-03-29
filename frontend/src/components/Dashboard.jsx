import React, { useEffect, useState } from 'react'
import PieChartComponent from "./PieChartComponent";
import LineChartComponent from "./LineChartComponent";

const Dashboard = () => {
  const [totalExpenditure, setTotalExpenditure] = useState(0);

  useEffect(() => {
    const fetchExpenditure = async () => {
      const data = await (await fetch("http://localhost:3000/total-expenditure")).json();
      if (data) {
        setTotalExpenditure(data[0].total_cost.toLocaleString("en-IN"));
      }
    }

    fetchExpenditure();
  }, []);

  return (
    <>
      <main className='dashboard-wrapper'>
        <section className='dashboard-content-wrapper'>
          <section className='expenditure-wrapper'>
            <div className='expenditure-card'>
              <h2 className="">
                Total Expenditure <br /> Over Year
              </h2>
              <div className="time-period">Feb 2024 - Jan 2025</div>
              <h1 className="total-amount">₹ {totalExpenditure}</h1>
            </div>
          </section>
          <section>
            <PieChartComponent />
          </section>
        </section>
        <section className="line-chart-wrapper">
          <LineChartComponent />
        </section>
      </main>
    </>
  )
}

export default Dashboard