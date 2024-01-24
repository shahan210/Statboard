import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
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

export default function Graph(props) {
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
    labels: props.graphData.xAxis.length > 0 && props.graphData.xAxis,
    datasets: [
      {
        label: "Dataset 1",
        data: props.graphData.yAxis.length > 0 && props.graphData.yAxis,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <div className="col-sm-8">
      <div className="container-graph">
        <div className="graph-item">
          <Line options={options} data={data} />
        </div>
      </div>
    </div>
  );
}
