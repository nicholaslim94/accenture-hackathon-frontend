import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../images/logo.png";
import Nav from "react-bootstrap/Nav";

function MainNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="">
          <img
            alt=""
            src={logo}
            width="40"
            height="40"
            className="d-inline-block"
          />{" "}
          Vaccinate Lah!
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#whyVaccinate">Why Vaccinate</Nav.Link>
            <Nav.Link href="#rewards">Rewards</Nav.Link>
            <Nav.Link href="#volunteer">Volunteer</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Register</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
