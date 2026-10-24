import React from "react";
import "./Spinner.css";

export default function Spinner() {
  return (
    <div className="spinner-container">
      <div className="modern-spinner"></div>
      <p className="spinner-text">Loading more stories...</p>
    </div>
  );
}
