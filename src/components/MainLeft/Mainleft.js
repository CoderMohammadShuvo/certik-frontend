import React from "react";
import "./Mainleft.css";
import BinanceImage from "../../assets/binancedex.png";
import Arrow from "../../assets/Vector (6).png";
import BinanceLogo from "../../assets/Group 1555.png";
import EhterLogo from "../../assets/Group 1553.png";
import Twitter from "../../assets/Vector (7).png";
import Telegram from "../../assets/_x33_35-telegram.png";
import Website from "../../assets/Group 1474.png";
import ABC from "../../assets/abcc 1.png";
import DragonAd from "../../assets/Group 1488.png";
export default function Mainleft() {
  const Data = [
    {
      name: "BNB",
      logo: `${BinanceLogo}`,
    },

    {
      name: "ETH",
      logo: `${EhterLogo}`,
    },
  ];
  return (
    <div className="mainleft">
      <div className="upcomingProject">
        <div className="upomingProjectHead">
          <h2>Upcoming Projects</h2>
          <div className="networkSeleUpcoming">
            <img src={BinanceImage} alt="" id="binancedexUp" />
            <p className="networkNameUp">BNB Chain</p>
            <img src={Arrow} alt="" id="downArrroww" />
          </div>
        </div>
        {Data.map((coin) => (
          <div className="Upcomingcoins">
            <img src={coin.logo} alt="" className="upcomingProjectLogo" />
            <p>{coin.name} (314)</p>
            <img src={Twitter} alt="" className="upcomingProjectSocial" />
            <img src={Telegram} alt="" className="upcomingProjectSocial" />
            <img src={Website} alt="" className="upcomingProjectSocial" />
          </div>
        ))}
      </div>

      <img src={ABC} alt="" className="abc" />
      <br />
      <img src={DragonAd} alt="" className="dradonBan" />
    </div>
  );
}
