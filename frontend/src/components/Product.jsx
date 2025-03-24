import React, { useEffect, useState } from "react";
import TableAreaComponent from "./Table";
import PieChartComponent from "./PieChartComponent";
import BarChartComponent from "./BarChartComponent";
import LineChartComponent from "./LineChartComponent";
import ComposedChartComponent from "./ComposedChartComponent";

const Product = () => {
  const[productData , setProductData]=useState([])
  const[products , setProducts] =useState([])

  useEffect(()=> {
    const fetchProductData  = async()=> {
      const result = await fetch("http://localhost:3000/individualProduct")
      const data = await result.json()
      if(data){
        setProductData(data)
        const fetchData = Array.from(new Set(data.map((obj) => obj.ServiceName)));
        setProducts(fetchData)
      }
    }

  }

  )



  return (
    <main className="product-wrapper">
      <section className="content-wrapper">
        <section>
          {/* <PieChartComponent /> */}
          {/* <BarChartComponent /> */}
          <ComposedChartComponent />
        </section>

        <section className="line-chart-wrapper">
          {/* <LineChartComponent /> */}
          <BarChartComponent />
        </section>
      </section>

      <section className="table-area-wrapper">
        <TableAreaComponent />
      </section>
      <section>
        {
          products.map((item,i) =>(
            <BarChartComponent />
            

          ))
        }

      </section>
    </main>
  );
};

export default Product;
