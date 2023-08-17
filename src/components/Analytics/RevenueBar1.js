import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import { createTheme } from "@mui/material/styles";
import "chart.js/auto";

export default class RevenueBar1 extends Component {
  constructor(props) {
    super(props);
    const theme = createTheme();
    const themeColor = theme.palette.primary.main;
    console.log("Bar", theme.palette.primary.main);
    this.state = {
      chartData: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July"],
        datasets: [
          {
            label: "2022",
            data: [[1, 12], [1, 19], 3, 5, 2, 3, 3],
            backgroundColor: [themeColor],
            borderColor: [themeColor],
            // borderWidth: 1,
            borderRadius: 50,
            barThickness: 20,
            stack: "group1",
            borderSkipped: "middle",
          },
          {
            label: "2023",
            data: [-18, -16, -3, -5, -2, -3, -3],
            backgroundColor: ["rgba(255, 99, 132, 0.2)"],
            borderColor: ["rgba(255, 99, 132, 1)"],
            // borderWidth: 1,
            borderRadius: 50,
            barThickness: 20,
            stack: "group1",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
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

                // family: 'Arial' // 可选: 字体系列
              },
            },
          },
          x: {
            ticks: {
              color: "rgba(50, 71, 92, 0.6)", // 字体颜色
              font: {
                size: 16, // 字体大小

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
        <Bar
          data={this.state.chartData}
          options={this.state.options}
          style={{ height: "300px", width: "500px" }}
        />
      </div>
    );
  }
}
