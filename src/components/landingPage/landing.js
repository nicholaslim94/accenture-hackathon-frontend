import React from "react";
import "./Landing.css";
import Carousel from "../carousel/Carousel";
import Mainnavbar from "../navbar/MainNavbar";

function Landing() {
  return (
    <div>
      <h1> Vaccinelah </h1>
      <Mainnavbar />
      <Carousel />
    </div>
  );
}

export default Landing;
