import React from "react";
import "./HeadinTop.css";
import BinanceImage from "../../assets/binancedex.png";
import Arrow from "../../assets/Vector (6).png";
import SearchIcon from "../../assets/search.png";
import Twitter from "../../assets/Vector (7).png";
import Telegram from "../../assets/_x33_35-telegram.png";
export default function HeadingTop() {
  return (
    <div className="headingTop">
      <button className="contactUsButton">Contact Us</button>
      <button className="infoButton">i</button>
      <div className="networkSele">
        <img src={BinanceImage} alt="" id="binancedex" />
        <p className="networkName">BNB Chain</p>
        <img src={Arrow} alt="" />
      </div>
      <p className="bnbBal">BNB: $334.47</p>
      <div className="searchCoin">
        <img src={SearchIcon} alt="" />
        <input type="text" placeholder="Search token, transaction, etc" />
      </div>
      <img src={Twitter} alt="" className="socialLogo" id="twitterLogo" />
      <img src={Telegram} alt="" className="socialLogo" />
      <button className="connectButton">Connect</button>
    </div>
  );
}
