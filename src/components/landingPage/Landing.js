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
        <div className = "intro">
      <h1 style={{ "font-size": "60px" }}> Welcome to Vaccinatelah</h1>
      </div>
        <Carousel />
        <Introduction />
      </Container>
      
     
    </div>
  );
}

export default Landing;
