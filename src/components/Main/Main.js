import React from "react";
import MainCenter from "../MainCenter/MainCenter";
import Mainleft from "../MainLeft/Mainleft";
import MainRight from "../MainRight/MainRight";
import "./Main.css";

export default function Main() {
  return (
    <div className="main">
      <Mainleft />
      <MainCenter />
      <MainRight />
    </div>
  );
}
