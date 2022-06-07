import React from "react";
import "./Topbanner.css";
import FirstImage from "../../assets/IMG_20220523_121848_610 1.png";
import Logo from "../../assets/logo.png";
import Adddd from "../../assets/adddd.svg";
export default function TopBanner() {
  return (
    <div className="topBanner">
      <img src={FirstImage} alt="" className="firstImage" />
      <img src={Logo} alt="" className="logo" />
      <img src={Adddd} alt="" className="banner" />
    </div>
  );
}
