import "./App.css";
import Graph from "./components/Main/Graph";
import SideBar from "./components/Sidebar/SideBar";
import Table from "./components/Main/Table";
import Topbar from "./components/Main/TopBar";

function App() {
  return (
    <>
      <div className="row">
        <div class="col-sm-2">
          <SideBar />
        </div>
        <div class="col-sm-10">
          <Topbar />
          <Graph />
          <Table />
        </div>
      </div>
    </>
  );
}

export default App;
