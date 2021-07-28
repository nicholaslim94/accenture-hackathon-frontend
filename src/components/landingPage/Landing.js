import React from "react";
import "./Landing.css";
import Carousel from "../carousel/Carousel";
import MainNavbar from "../navbar/MainNavbar";
import Container from "react-bootstrap/Container";

function Landing() {
  return (
    <div>
      <MainNavbar />
      <Container className="content">
        <h1> Vaccinelah </h1>
        <Carousel />
      </Container>
    </div>
  );
}

export default Landing;
