import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const navStyle = {
    position: "fixed",
    left: 0,
    bottom: 0,
    width: "100%",
    backgroundColor: "#333",
    color: "white",
    padding: "10px 0",
    zIndex: 1000,
    overflowX: "auto",
    whiteSpace: "nowrap",
    transition: "transform 0.5s ease-in-out",
  };

  const ulStyle = {
    listStyleType: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    justifyContent: "center",
  };

  const liStyle = {
    margin: "0 10px",
    display: "inline-block",
  };

  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        <button style={liStyle}>
          <Link to="/">Addition</Link>
        </button>
        <button style={liStyle}>
          <Link to="/subtraction">Subtraction</Link>
        </button>
        <button style={liStyle}>
          <Link to="/multiplication">Multiplication</Link>
        </button>
        <button style={liStyle}>
          <Link to="/division">Division</Link>
        </button>
      </ul>
    </nav>
  );
};

export default Navigation;
