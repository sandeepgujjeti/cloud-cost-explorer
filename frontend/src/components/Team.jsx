import React, { useState, useEffect, useContext } from "react";
import TableAreaComponent from "./Table";
import PieChartComponent from "./PieChartComponent";
import LineChartComponent from "./LineChartComponent";
import { AppContext } from "../App";
import HorizontalBarChart from "./HorizontalBarChart";
import "../CSS/team.css";

const Team = () => {
  const { analysisType } = useContext(AppContext);

  const [teams, setTeams] = useState([]);
  const [teamsData, setTeamsData] = useState([]);

  useEffect(() => {
    const fetchTeamsData = async () => {
      const data = await (await fetch("http://localhost:3000/individual-team")).json();
      if (data) {
        setTeams(Array.from(new Set(data.map((obj) => obj.TeamId))));
        setTeamsData(data);
      }
    };

    fetchTeamsData();
  }, [analysisType]);

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

      <section className="individual-team-wrapper">
        {
          teams.map((team, i) => (
            <div key={i} className="individual-team">
              <div className="team">{team}</div>
              <HorizontalBarChart
                team={team}
                barData={
                  teamsData.filter(teamObj =>
                    teamObj.TeamId === team
                      ? {
                        TeamId: teamObj.TeamId,
                        month_name: teamObj.month_name,
                        total_cost: Number(teamObj.total_cost)
                      }
                      : null
                  )
                }
              />
            </div>
          ))
        }
      </section>
    </main>
  );
};

export default Team;
