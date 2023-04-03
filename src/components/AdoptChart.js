import React from "react";
import { Bar } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function AgeChart({ chartData }) {
  return (
    <Bar
      data={chartData}
      options={{
        indexAxis: "y",
        scales: {
          x: {
            display: true,
            grid: {
              display: false,
            },
          },
          y: {
            grid: {
              display: false,
            },
          },
        },
      }}
    />
  );
}

function TimeChart({ chartData }) {
  return (
    <Line
      data={chartData}
      options={{
        fill: "origin",
        scales: {
          x: {
            display: true,
            grid: {
              display: false,
            },
          },
          y: {
            grid: {
              display: false,
            },
            stacked: true,
          },
        },
      }}
    />
  );
}

export default { AgeChart, TimeChart };
