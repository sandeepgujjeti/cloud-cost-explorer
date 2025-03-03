import React from 'react'
import PieChartComponent from "./PieChartComponent";
import LineChartComponent from "./LineChartComponent";



const Dashboard = () => {
  return (
    <>
      <section className='expenditure-card'>
        <div className="flex items-center justify-center min-h-screen bg-gray-300">
          <div className="bg-gray-300 p-8 rounded-xl shadow-md text-center w-[400px]">
            <h2 className="text-2xl font-medium text-black leading-tight">
              Total Expenditure <br /> Over Year
            </h2>
            <p className="text-lg text-black mt-2">Feb 20XY - Jan 20X(Y + 1)</p>
            <p className="text-5xl font-extrabold text-black mt-6">₹ 5,00,000</p>
          </div>
        </div>
      </section >
      <section>
        <PieChartComponent />
      </section>

      <section><LineChartComponent /></section>
    </>
  )
}

export default Dashboard