import React, { useState } from "react";
import Breif from "../../UI/assets/Briefcase.png";
import Dash from "../../UI/assets/Circled menu.png";
import Support from "../../UI/assets/Support.png";
import Plug from "../../UI/assets/puzzle.png";
import Help from "../../UI/assets/Help.png";
import LogoName from "../../UI/assets/StatBoard.png";
import LogOut from "../../UI/assets/Shutdown.png";
import { GiHamburgerMenu } from "react-icons/gi";
export default function SideBar() {
  const [slide, setSlide] = useState(false);
  const slideBar = () => {
    if (!slide) {
      setSlide(true);
      document.querySelector(".sidebar").style.width = "150px";
      // document.querySelector(".col-sm-2").style.width = "16.66667%";

      var element = document.getElementById("slider");
      setTimeout(() => {
        element.classList.add("slide-open");
        document.querySelector(".logo").style.display = "block";
        document.querySelector(".menu").style.display = "block";
        document.querySelector(".logout").style.display = "block";
      }, 300);
    } else {
      document.querySelector(".sidebar").style.width = "0px";
      // document.querySelector(".col-sm-2").style.width = "0px";
      document.querySelector(".logo").style.display = "none";
      document.querySelector(".menu").style.display = "none";
      document.querySelector(".logout").style.display = "none";
      var element = document.getElementById("slider");
      setTimeout(() => {
        element.classList.remove("slide-open");
      }, 300);
      setSlide(false);
    }
  };
  return (
    <div class="col-sm-2">
      <div className="sidebar">
        <GiHamburgerMenu
          id="slider"
          onClick={() => slideBar()}
          className="hamburg"
        />
        <div className="logo">
          <img src={Breif} alt="Briefcase" className="brief" />
          <br />
          <img src={LogoName} alt="StatBoard" className="company" />
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
            Logout
            <img src={LogOut} alt="LogOut" className="logout-image" />
          </button>
        </div>
      </div>
    </div>
  );
}
