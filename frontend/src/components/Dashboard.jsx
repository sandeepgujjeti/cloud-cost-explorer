import React from 'react'
import PieChartComponent from "./PieChartComponent";
import LineChartComponent from "./LineChartComponent";
import { logOut } from '../auth';
import { useNavigate } from 'react-router-dom';



const Dashboard = () => {
  return (
    <>
      <main className='dashboard-wrapper'>
        <section className='content-wrapper'>
          <section>
            <div className='expenditure-card'>
              <h2 className="">
                Total Expenditure <br /> Over Year
              </h2>
              <p className="time-period">Feb 2024 - Jan 2025</p>
              <h1 className="total-amount">₹ 5,00,000</h1>
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