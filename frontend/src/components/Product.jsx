import React from "react";
import TableAreaComponent from "./TableAreaComponent";
import PieChartComponent from "./PieChartComponent";
import LineChartComponent from "./LineChartComponent";

const Product = () => {
  return (
    <main className="product-wrapper">
      <section className="content-wrapper">
        <section>
          <PieChartComponent />
        </section>

        <section className="line-chart-wrapper">
          <LineChartComponent />
        </section>
      </section>

      <section className="table-area-wrapper">
        <TableAreaComponent />
      </section>
    </main>
  );
};

export default Product;
