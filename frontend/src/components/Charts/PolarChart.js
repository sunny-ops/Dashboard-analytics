import React from "react";
import { Doughnut } from "react-chartjs-2";
import { PolarArea } from "react-chartjs-2";

function PolarChart(props) {
  // const data = {
  //   labels: ["operational", "Networking", "Hiring", "R&D"],
  //   datasets: [
  //     {
  //       // label: "My First Dataset",
  //       data: [300, 80, 100, 120],
  //       backgroundColor: [
  //         "rgb(255, 99, 132)",
  //         "rgb(54, 162, 235)",
  //         "rgb(255, 205, 86)",
  //         "rgb(0, 212, 189)",
  //       ],
  //       hoverOffset: 4,
  //     },
  //   ],
  // };

  const data = {
    labels: ["Likes", "Watches", "Comments", "Replies", "Shares"],
    datasets: [
      {
        label: "My First Dataset",
        data: [11, 16, 10, 5, 3],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(75, 192, 192)",
          "rgb(255, 205, 86)",
          "rgb(201, 203, 207)",
          "rgb(54, 162, 235)",
        ],
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
      beforeDraw: (chart) => {
        const ctx = chart.ctx;
        ctx.save();
        const total = chart.data.datasets[0].data.reduce((a, b) => a + b, 0);

        chart.data.datasets[0].data.forEach((value, index) => {
          const metaData = chart.getDatasetMeta(0).data[index];
          const percentage = parseFloat(((value / total) * 100).toFixed(1));

          const centerX = metaData.x;
          const centerY = metaData.y;

          ctx.font = "16px Arial";
          ctx.fillStyle = "white";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(percentage + "%", centerX, centerY);
        });

        ctx.restore();
      },
    },
  };

  return (
    <div className="default round-border mt-3 p-5" style={{ height: "90vh" }}>
      <h2>Statistics</h2>
      <div className="mb-5">Spending on various categories</div>
      <div className="d-flex justify-content-center">
        <div style={{ width: "50%" }}>
          {" "}
          <PolarArea data={data} options={options} />
        </div>
      </div>
    </div>
  );
}

export default PolarChart;
