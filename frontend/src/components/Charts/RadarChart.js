import React from "react";
import "./chart.css";

function RadarChart(props) {
  return (
    <div
      className="default round-border mt-3 p-5"
      style={{ height: "90vh", overflow: "hidden" }}
    >
      <h2>Mobile Comparison</h2>
      <div className="mb-3">Commercial networks & enterprises</div>
      <div className="d-flex justify-content-center align-items-center">
        <div className="order radar mt-5" style={{ width: "100%" }}></div>
      </div>
    </div>
  );
}

export default RadarChart;
