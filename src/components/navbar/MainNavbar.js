import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../images/logo.png";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function MainNavbar() {
  return (
    <Router>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="/">
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
              <Nav.Link href="./whyVaccinate">Why Vaccinate</Nav.Link>
              <Nav.Link href="./rewards">Rewards</Nav.Link>
              <Nav.Link href="./volunteer">Volunteer</Nav.Link>
            </Nav>
            <Nav hidden={false}>
              <Nav.Link href="./register">Register</Nav.Link>
              <Nav.Link href="./login">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
}

export default MainNavbar;
