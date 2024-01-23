import "./App.css";
import Card from "./components/Main/Card";
import Graph from "./components/Main/Graph";
import PieChart from "./components/Main/PieChart";
import SideBar from "./components/Sidebar/SideBar";
import Table from "./components/Main/Table";
import Topbar from "./components/Main/Topbar";

function App() {
  return (
    <>
      <div className="row">
        <div class="col-sm-2">
          <SideBar />
        </div>
        <div class="col-sm-10">
          <Topbar />
          <div className="row">
            <div className="col-sm-8">
              <Graph />
            </div>
            <div className="col-sm-4">
              <PieChart />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-10">
              <Table />
            </div>
            <div className="col-sm-2">
              <Card />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
