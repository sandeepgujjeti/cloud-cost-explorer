import React, { useEffect, useState } from "react";
import TableAreaComponent from "./Table";
import BarChartComponent from "./BarChartComponent";
import ComposedChartComponent from "./ComposedChartComponent";
import HorizontalBarChart from "./HorizontalBarChart";
import "../CSS/product.css";


const Product = () => {
  const [productData, setProductData] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        const result = await fetch("http://localhost:3000/individual-product");
        const data = await result.json();
        if (data) {
          setProductData(data);
          const fetchData = Array.from(new Set(data.map((obj) => obj.ServiceName)));
          setProducts(fetchData);
        }
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };
    console.log("Product Data:", productData);
    console.log(products);


    fetchProductsData();
  }, []);

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

      <section className="individual-product-wrapper">
        {products.map((item, i) => (
          <div key={i} className="individual-product">
            <div className="product">{item}</div>
            <HorizontalBarChart
              barData={productData
                .filter((serviceObj) => serviceObj.ServiceName === item)
                .map((serviceObj) => ({
                  month_name: serviceObj.month_name,
                  total_cost: serviceObj.total_cost,
                }))}
            />

          </div>
        ))
        }
      </section>
    </main>
  );
};
export default Product;