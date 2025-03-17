import React from "react";
import TableAreaComponent from "./Table";
import PieChartComponent from "./PieChartComponent";
import BarChartComponent from "./BarChartComponent";
import LineChartComponent from "./LineChartComponent";
import ComposedChartComponent from "./ComposedChartComponent";

const Product = () => {
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
    </main>
  );
};

export default Product;
