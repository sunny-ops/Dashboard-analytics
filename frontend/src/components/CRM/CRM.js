import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

export default class CRM extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July"],
        datasets: [
          {
            label: "# of Votes1",
            data: [[1, 12], [1, 19], 3, 5, 2, 3, 3],
            backgroundColor: ["rgba(255, 99, 132, 0.2)"],
            borderColor: ["rgba(255, 99, 132, 1)"],
            // borderWidth: 1,
            borderRadius: 50,
            barThickness: 30,
            stack: "group1",
            borderSkipped: "middle",
          },
          {
            label: "# of Votes2",
            data: [-18, -16, -3, -5, -2, -3, -3],
            backgroundColor: ["rgba(255, 99, 132, 0.2)"],
            borderColor: ["rgba(255, 99, 132, 1)"],
            // borderWidth: 1,
            borderRadius: 50,
            barThickness: 30,
            stack: "group1",
          },
        ],
      },
      options: {
        // plugins: {
        //   legend: {
        //     display: false,
        //   },
        // },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              color: "rgba(50, 71, 92, 0.6)", // 字体颜色
              font: {
                size: 16, // 字体大小
                style: "bold", // 字体样式
                // family: 'Arial' // 可选: 字体系列
              },
            },
          },
          x: {
            ticks: {
              color: "rgba(50, 71, 92, 0.6)", // 字体颜色
              font: {
                size: 16, // 字体大小
                style: "bold", // 字体样式
                // family: 'Arial' // 可选: 字体系列
              },
            },
            grid: {
              display: false,
            },
          },
        },
      },
    };
  }

  render() {
    return (
      <div>
        <Bar data={this.state.chartData} options={this.state.options} />
      </div>
    );
  }
}
