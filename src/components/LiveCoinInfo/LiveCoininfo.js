import React from "react";
import "./LiveCoinInfo.css";
import PancakeLogo from "../../assets/pancakeswap logo.png";
import YellowDot from "../../assets/Ellipse 286.png";

export default function LiveCoininfo() {
  const Data = [
    {
      id: 1,
      symbol: "LUNA",
      logo: `${PancakeLogo}`,
    },
    {
      id: 2,
      symbol: "GST",
      logo: `${PancakeLogo}`,
    },
  ];
  return (
    <div className="liveCoininfo">
      <div className="leftSIdeCoinLive">
        <div className="hotPairs">
          <p>Hot Pairs</p>
        </div>
        <div className="hotPairsLIst">
          {Data.map((coin) => (
            <div className="coins">
              <p className="coinNumber">#{coin.id}</p>
              <p className="coinName">{coin.symbol}</p>
              <img src={coin.logo} alt="" />
            </div>
          ))}
        </div>
      </div>
      <div className="rightSideCoinLive">
        <img src={YellowDot} alt="" />
        <p>Trading</p>
      </div>
    </div>
  );
}
