import React from "react";
import { Line } from "react-chartjs-2";

function AreaChart(props) {
  const data = {
    labels: [
      "7/10",
      "8/10",
      "9/10",
      "10/10",
      "11/10",
      "12/10",
      "1/10",
      "2/10",
      "3/10",
      "4/10",
      "5/10",
      "6/10",
      "7/10",
    ],
    datasets: [
      {
        label: "visits",
        backgroundColor: "rgba(75,192,192,0.4)", // The fill color for the area below the line
        borderColor: "rgba(75,192,192,1)", // The line color
        borderWidth: 1,
        hoverBackgroundColor: "rgba(75,192,192,0.4)",
        hoverBorderColor: "rgba(75,192,192,1)",
        data: [105, 120, 115, 135, 130, 148, 142, 160, 170, 165, 180, 200, 190],
        fill: true, // This property sets the area chart
      },
      {
        label: "clicks",
        backgroundColor: "rgba(75,192,192,0.6)", // The fill color for the area below the line
        borderColor: "rgba(75,192,192,1)", // The line color
        borderWidth: 1,
        hoverBackgroundColor: "rgba(75,192,192,0.6)",
        hoverBorderColor: "rgba(75,192,192,1)",
        data: [102, 110, 107, 125, 120, 133, 128, 140, 138, 145, 150, 160, 180],
        fill: true, // This property sets the area chart
      },
      {
        label: "sales",
        backgroundColor: "rgba(75,192,192,0.8)", // The fill color for the area below the line
        borderColor: "rgba(75,192,192,1)", // The line color
        borderWidth: 1,
        hoverBackgroundColor: "rgba(75,192,192,0.8)",
        hoverBorderColor: "rgba(75,192,192,1)",
        data: [105, 108, 104, 112, 110, 115, 113, 118, 116, 120, 123, 130, 127],
        fill: true, // This property sets the area chart
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          // Adjust the padding values as needed.
          padding: 30,
        },
      },
    },
  };

  return (
    <div className="default round-border mt-3 p-5" style={{ height: "90vh" }}>
      <h2>Line Chart</h2>
      <div className="mb-5">Commercial networks</div>
      <div className="100%">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}

export default AreaChart;
