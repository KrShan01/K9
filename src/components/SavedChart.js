import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function SavedChart({ chartData }) {
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

export default SavedChart;
