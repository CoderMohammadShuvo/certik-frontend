import React from "react";
import HeadingTop from "../HeadingTop/HeadingTop";
import LiveCoininfo from "../LiveCoinInfo/LiveCoininfo";
import Main from "../Main/Main";
import TopBanner from "../TopBanner/TopBanner";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <TopBanner />
      <HeadingTop />
      <LiveCoininfo />
      <Main />
    </div>
  );
}
