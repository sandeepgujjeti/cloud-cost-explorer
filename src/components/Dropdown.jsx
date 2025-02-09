import styles from "./dropdown.module.css";
import React, { useEffect, useState } from "react";
import { teams, analysisTypes, dates, services } from "../constants/contants";

const Dropdown = ({ analysisType, setColumn }) => {

  const [selectedItem, setSelectedItem] = useState("All Teams");
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  useEffect(() => {
    setColumn(selectedItem);

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
          {["All Teams", ...teams].map((team, index) => (
            <li
              key={index}
              className={`${styles.menuItem}`}
              onClick={() => handleItemClick(team)}
            >
              {team}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;