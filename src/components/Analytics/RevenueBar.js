import React from "react";
import { Bar } from "react-chartjs-2";

import { useTheme } from "@mui/material/styles";
import "chart.js/auto";

function RevenueBar(props) {
  const theme = useTheme();
  const themeColor = theme.palette.primary.main;

  console.log("main", theme.palette.primary.main);
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July"],
    datasets: [
      {
        label: "2022",
        data: [[1, 12], [1, 19], [1, 3], 5, 2, 3, 3],
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
        backgroundColor: [themeColor],
        borderColor: [themeColor],
        // borderWidth: 1,
        borderRadius: 50,
        barThickness: 20,
        stack: "group1",
      },
    ],
  };

  const options = {
    layout: {
      padding: {
        left: 0, // 左侧间距
        right: 0, // 右侧间距
        top: 0, // 顶部间距
        bottom: 0, // 底部间距
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    // plugins: {
    //   legend: {
    //     position: "top", // 设置图例的位置
    //     align: "start", // 设置图例的对齐方式
    //     labels: {
    //       boxWidth: 20, // 设置图例标签的宽度
    //       //   fontColor: "black", // 设置文字颜色
    //       padding: 20, // 设置图例标签之间的间距
    //       usePointStyle: true, // 使用点的样式替代默认的矩形样式
    //     },
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
  };

  return (
    <Bar
      data={data}
      options={options}
      style={{ height: "312px", width: "612px" }}
    />
  );
}

export default RevenueBar;
