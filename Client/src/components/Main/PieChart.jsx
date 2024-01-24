import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
export default function PieChart() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "right",
      },
    },
  };
  const data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
          "#67C587",
          "#88D1A1",
          "#A9DEBA",
          "#C9EAD4",
          "#EAF6ED",
        ],
        borderColor: ["#67C587", "#88D1A1", "#A9DEBA", "#C9EAD4", "#EAF6ED"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="col-sm-4">
      <div className="container-pie">
        <div className="pie-item">
          <Pie data={data} options={options} />
        </div>
      </div>
    </div>
  );
}
