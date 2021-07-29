import React from "react";
import "./Landing.css";
import Carousel from "../carousel/Carousel";
import MainNavbar from "../navbar/MainNavbar";
import Container from "react-bootstrap/Container";
import Introduction from "../introduction/Introduction";

function Landing() {
  return (
    <div>
      <MainNavbar />
      <Container className="content">
        <h1> Vaccineate Lah </h1>
        <Carousel />
      </Container>
      <Introduction />
    </div>
  );
}

export default Landing;
