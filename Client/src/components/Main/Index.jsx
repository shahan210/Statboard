import React, { useEffect, useState } from "react";
import Topbar from "./TopBar";
import Graph from "./Graph";
import Table from "./Table";
import api from "../../API/Post";
import PieChart from "./PieChart";
export default function Index() {
  const [loading, setLoading] = useState({
    table: true,
    pie: true,
    graph: true,
  });
  const [graphData, setGraphData] = useState({
    xAxis: "",
    yAxis: "",
  });
  const [pieData, setPieData] = useState({
    labels: "",
    data: "",
  });
  const [tableData, setTableData] = useState();

  useEffect(() => {
    graphDetails();
    pieDetails();
    tableDetails();
  }, [loading]);

  const graphDetails = async () => {
    loading.graph &&
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
          setLoading({
            ...loading,
            graph: false,
          });
        }));
  };

  const pieDetails = async () => {
    loading.pie &&
      (await api
        .get("/api/pie-chart")
        .then((response) => {
          // console.log(response);
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
          setLoading({
            ...loading,
            pie: false,
          });
        }));
  };

  const tableDetails = async () => {
    loading.table &&
      (await api
        .get("/api/table")
        .then((response) => {
          // console.log(response);
          setTableData(response);
        })
        .catch((err) => {
          console.log(err);
          console.log("errorr");
        })
        .finally(() => {
          setLoading({
            ...loading,
            table: false,
          });
        }));
  };
  return (
    <div class="col-sm-10">
      <Topbar />
      <div className="row">
        <Graph graphData={graphData} />
        <PieChart pieData={pieData} />
      </div>
      <Table tableData={tableData} />
    </div>
  );
}
