import styles from "./dropdown.module.css";
import React, { useEffect, useState } from "react";
import { axisValues } from "../constants/contants";

const Dropdown = ({ axis, axisValue, setAxisValue }) => {
  const [selectedItem, setSelectedItem] = useState("All Teams");
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  useEffect(() => {
    if (axis === "X") {
      setAxisValue({
        ...axisValue,
        x: selectedItem
      })
    } else {
      setAxisValue({
        ...axisValue,
        y: selectedItem
      })
    }
  }, [selectedItem]);

  return (
    <div className={styles.dropdown} tabIndex={0}>
      
      <div className={styles.label}>
        Select {axis === "X" ? "X" : "Y"} Axis Value
      </div>

      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={styles.button}
        aria-expanded={isOpen}
      >
        {selectedItem}
        <span className={styles.icon}>{isOpen ? "▲" : "▼"}</span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul className={styles.menu}>
          {["All Teams", ...axisValues].map((team, index) => (
            <li
              key={team}
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
