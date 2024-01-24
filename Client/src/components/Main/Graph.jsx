import PieChart from "./PieChart";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
import api from "../../API/Post";
import { useEffect, useState } from "react";

export default function Graph() {
  const [loading, setLoading] = useState(true);
  const [graphData, setGraphData] = useState({
    xAxis: "",
    yAxis: "",
  });

  useEffect(() => {
    graphDetails();
  }, []);

  const graphDetails = async () => {
    loading &&
      (await api
        .get("/api/graph")
        .then((response) => {
          // console.log(response);
          setGraphData({
            ...graphData,
            xAxis: response.map((item) => item.x),
            yAxis: response.map((item) => item.y),
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
        display: false,
        position: "right",
      },
      title: {
        display: false,
        text: "Chart.js Line Chart",
      },
    },
  };
  const data = {
    labels: graphData.xAxis.length > 0 && graphData.xAxis,
    datasets: [
      {
        label: "Dataset 1",
        data: graphData.yAxis.length > 0 && graphData.yAxis,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return (
    <div className="row">
      <div className="col-sm-8">
        <div className="container-graph">
          <div className="graph-item">
            <Line options={options} data={data} />
          </div>
        </div>
      </div>
      <PieChart />
    </div>
  );
}
