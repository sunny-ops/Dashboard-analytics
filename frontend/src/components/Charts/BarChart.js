import React from "react";
import "./chart.css";

function BarChart(props) {
  return (
    <div className="default round-border mt-3 p-5" style={{ height: "90vh" }}>
      <h2>Line Chart</h2>
      <div className="mb-5">Data Science</div>

      <div className="order bar mt-5" style={{ width: "100%" }}></div>
    </div>
  );
}

export default BarChart;
