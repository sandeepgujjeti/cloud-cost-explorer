import React from "react";
import TableAreaComponent from "./TableAreaComponent";
import PieChartComponent from "./PieChartComponent";
import LineChartComponent from "./LineChartComponent";

const Team = () => {
  return (
    <main className="team-wrapper">
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

export default Team;
