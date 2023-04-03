import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function CharChart({ chartData }) {
  return (
    <div className="Col1">
      <Bar
        data={chartData}
        options={{
          indexAxis: "y",
          scales: {
            x: {
              stacked: true,
              display: true,
              grid: {
                display: false,
              },
            },
            y: {
              stacked: true,
              ticks: {
                beginAtZero: true,
              },
              grid: {
                display: false,
              },
            },
          },
        }}
      />
    </div>
  );
}

function BreedChart({ chartData }) {
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

export default { CharChart, BreedChart };
