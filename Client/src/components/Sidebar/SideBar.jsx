import React from "react";
import Breif from "../../UI/assets/Briefcase.png";
import Dash from "../../UI/assets/Circled menu.png";
import Support from "../../UI/assets/Support.png";
import Plug from "../../UI/assets/puzzle.png";
import Help from "../../UI/assets/Help.png";
import LogoName from "../../UI/assets/StatBoard.png";
import LogOut from "../../UI/assets/Shutdown.png";
export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={Breif} alt="Briefcase" />
        <br />
        <img src={LogoName} alt="StatBoard" />
      </div>
      <div className="menu">
        <button className="active menu-button">
          <img src={Dash} alt="Dashboard" className="menu-image" />
          Dashboard
        </button>
        <br />
        <button className="menu-button">
          <img src={Support} alt="Support" className="menu-image" />
          Support
        </button>
        <br />
        <button className="menu-button">
          <img src={Plug} alt="Plugin" className="menu-image" />
          Plugins
        </button>
        <br />  
        <button className="menu-button">
          <img src={Help} alt="Help" className="menu-image" />
          Help
        </button>
      </div>
      <div className="logout">
        <button className="logout-button">
          <img src={LogOut} alt="LogOut" className="menu-image" />
          Logout
        </button>
      </div>
    </div>
  );
}
