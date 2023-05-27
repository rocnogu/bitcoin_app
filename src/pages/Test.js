import { React, useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

////////////////
export default function Test() {
  ////////////////
  const data = {
    labels: ["Bitcoin"],
    datasets: [
      {
        label: "Bitcoin to EUR",
        data: [26038, 100000],
        borderColor: "black",
        backgroundColor: "blue",
      },
      {
        label: "Bitcoin to USD",
        data: [26729, 100000],
        borderColor: "black",
        backgroundColor: "red",
      },
      {
        label: "Bitcoin to GBP",
        data: [22334, 100000],
        borderColor: "black",
        backgroundColor: "green",
      },
    ],
  };

  return (
    <div>
      {/* <!-- CHARTS STARTS HERE --> */}
      <Bar
        data={data}
        options={{
          responsive: true,
        }}
      />
      {/* <!-- CHARTS ENDS HERE --> */}
    </div>
  );
}
