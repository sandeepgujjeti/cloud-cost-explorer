import React from 'react'
import PieChartComponent from "./PieChartComponent";
import LineChartComponent from "./LineChartComponent";


const Dashboard = () => {
  return (
    <>
              <div className="content">
            <section>data</section>
            <section>
              <PieChartComponent />
            </section>
          </div>
          <section><LineChartComponent /></section>
    
    </>
  )
}

export default Dashboard