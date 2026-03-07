import React from "react";
import { Link } from "react-router-dom";

function HomeButton() {
  const buttonStyle = {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    zIndex: 1000,
    borderRadius: "50%",
    padding: "12px 16px",
    backgroundColor: "#0d6efd",
    color: "white",
    border: "none",
    boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
    cursor: "pointer",
    fontSize: "20px",
  };

  return (
    <Link to="/">
      <button style={buttonStyle} title="Go Home">
        🏠
      </button>
    </Link>
  );
}

export default HomeButton;