import React from "react";
import Profile from "../../UI/assets/media.png";
import Insta from "../../UI/assets/instagram.png";
import Twit from "../../UI/assets/twitter.png";
import Face from "../../UI/assets/facebook.png";
export default function Card() {
  return (
    <div className="col-sm-2 card-box">
      <div className="container-card">
        <img src={Profile} alt="profile picture" className="card-image" />
        <div className="details">
          <div style={{ fontWeight: "bold" }}> John Doe</div>
          <div>CEO</div>
          <div>
            <img src={Insta} alt="" className="socials" />
            <img src={Face} alt="" className="socials" />
            <img src={Twit} alt="" className="socials" />
          </div>
        </div>
      </div>
    </div>
  );
}
