import { useState } from "react";
import "./App.css";
import Index from "./components/Main";
import SideBar from "./components/Sidebar/SideBar";
import loader from "./UI/assets/Eclipse-1s-200px.gif";
function App() {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 200);
  if (loading) {
    return (
      <div style={{ position: "absolute", top: "35%", right: "43%" }}>
        <img style={{ width: 200, mixBlendMode: "darken" }} src={loader} />
      </div>
    );
  } else {
    return (
      <>
        <div className="row">
          <SideBar />
          <Index />
        </div>
      </>
    );
  }
}
export default App;
