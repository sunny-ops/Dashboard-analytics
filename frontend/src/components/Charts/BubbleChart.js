import React from "react";
import "./chart.css";

function BubbleChart(props) {
  return (
    <div className="default round-border mt-3 p-5" style={{ height: "80vh" }}>
      <h2>New Technologies Data</h2>
      <div className="mb-5">Commercial networks & enterprises</div>

      <div className="order bubble mt-5" style={{ width: "100%" }}></div>
    </div>
  );
}

export default BubbleChart;
