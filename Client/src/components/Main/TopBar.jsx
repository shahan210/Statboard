import React from "react";
import Image from "../../UI/assets/Rectangle 10.png";
export default function Topbar() {
  return (
    <div className="topBar">
      <div>Good Morning ! 🌞</div>
      <div className="card">
        <div>
          <p className="topbar-name">
            <b>John doe</b>
          </p>
          <p className="topbar-email">johndoe@gmail.com</p>
        </div>
        <div>
          <img src={Image} alt="picture" className="topbar-image" />
        </div>
      </div>
    </div>
  );
}
