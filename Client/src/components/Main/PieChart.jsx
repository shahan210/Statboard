import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import api from "../../API/Post";

ChartJS.register(ArcElement, Tooltip, Legend);
export default function PieChart() {
  const [loading, setLoading] = useState(true);
  const [pieData, setPieData] = useState({
    labels: "",
    data: "",
  });

  useEffect(() => {
    pieDetails();
  }, []);
  console.log(pieData);
  const pieDetails = async () => {
    loading &&
      (await api
        .get("/api/pie-chart")
        .then((response) => {
          console.log(response);
          setPieData({
            ...pieData,
            labels: response.map((item) => item.label),
            data: response.map((item) => item.value),
          });
        })
        .catch((err) => {
          console.log(err);
          console.log("errorr");
        })
        .finally(() => {
          setLoading(false);
        }));
  };

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
    labels: pieData.labels.length > 0 && pieData.labels,
    datasets: [
      {
        label: "# of Votes",
        data: pieData.data.length > 0 && pieData.data,
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
