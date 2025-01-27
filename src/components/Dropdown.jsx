import React, { useState } from "react";

const Dropdown = () => {
  const [selectedItem, setSelectedItem] = useState("Dropdown");
  const [isOpen, setIsOpen] = useState(false);

  const items = ["Team Wise Analysis", "Date Wise Analysis", "Service Wice Analysis"];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div style={{ position: "relative", width: "200px" }}>
      {/* Dropdown Button */}
      <button
        onClick={toggleDropdown}
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "white",
          border: "1px solid #ccc",
          borderRadius: "5px",
          textAlign: "left",
          cursor: "pointer",
        }}
      >
        {selectedItem}
        <span style={{ float: "right" }}>
          {isOpen ? "▲" : "▼"}
        </span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul
          style={{
            listStyle: "none",
            margin: 0,
            padding: "5px 0",
            position: "absolute",
            width: "100%",
            backgroundColor: "white",
            border: "1px solid #ccc",
            borderRadius: "5px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            zIndex: 1000,
          }}
        >
          {items.map((item, index) => (
            <li
              key={index}
              onClick={() => handleItemClick(item)}
              style={{
                padding: "10px",
                cursor: "pointer",
                backgroundColor: "white",
                borderBottom: index < items.length - 1 ? "1px solid #eee" : "none",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#f0f8ff")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "white")}
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