import styles from "./dropdown.module.css";
import React, { useEffect, useState } from "react";
import { teams, analysisTypes, dates, services } from "../constants/contants";

const Dropdown = ({ analysisType, setColumn, axisValue }) => {

  const [selectedItem, setSelectedItem] = useState("team_001");
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setColumn(selectedItem);
    setIsOpen(false);
  };
  let fetchQuery = "";

  useEffect(() => {
    switch (analysisType) {
      case analysisTypes.team:
        // fetchQuery = `http://localhost:3000/?x=${axisvalue.x}&y=${axisvalue.y}`
        setData(teams);
        break;
      case analysisTypes.date:
        // fetchQuery = `http://localhost:3000/?x=${axisvalue.x}&y=${axisvalue.y}`
        setData(dates);
        break;
      case analysisTypes.service:
        // fetchQuery = `http://localhost:3000/?x=${axisvalue.x}&y=${axisvalue.y}`
        setData(services);
        break;
    }
  }, [analysisType])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:3000/?x=${axisValue.x}&y=${axisValue.y}&value=${selectedItem}`);
        console.log(`http://localhost:3000/?x=${axisValue.x}&y=${axisValue.y}&value=${selectedItem}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        // setData(data);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    }
    fetchData();
  }, [selectedItem])

  return (
    <div className={styles.dropdown}>

      <div className={styles.label}>
        Select Value for Graph
      </div>

      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(prev => !prev)}
        className={styles.button}
      >
        {selectedItem}
        <span style={{ float: "right" }}>
          {isOpen ? "▲" : "▼"}
        </span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul
          className={styles.menu}
        >
          {data.map((item, index) => (
            <li
              key={index}
              className={`${styles.menuItem}`}
              onClick={() => handleItemClick(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;