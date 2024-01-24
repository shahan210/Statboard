import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import React, { useState } from "react";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
export default function PieChart(props) {
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
    labels: props.pieData.labels.length > 0 && props.pieData.labels,
    datasets: [
      {
        label: "# of Votes",
        data: props.pieData.data.length > 0 && props.pieData.data,
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
