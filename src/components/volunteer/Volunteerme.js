import "./Volunteer.css";
import MainNavbar from "../navbar/MainNavbar";
import Container from "react-bootstrap/Container";

import star from "../images/star.png";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";

function Volunteerme() {
  return (
    <div>
      <MainNavbar />
      <Container className="volunteerme-content">
        <h1>THANK YOU FOR VOLUNTEERING</h1>
        <Row>
          <Col>
            <div className="App">
              <header className="App-header">
                <img
                  src={star}
                  height="100px"
                  width="100px"
                  className="App-logo"
                  alt="logo"
                />
              </header>
            </div>
          </Col>
          <Col>
            <div className="App">
              <header className="App-header">
                <img
                  src={star}
                  height="100px"
                  width="100px"
                  className="App-logo"
                  alt="logo"
                />
              </header>
            </div>
          </Col>

          <Col>
            <div className="App">
              <header className="App-header">
                <img
                  src={star}
                  height="100px"
                  width="100px"
                  className="App-logo"
                  alt="logo"
                />
              </header>
            </div>
          </Col>
        </Row>
        <h1>YOU ARE A STAR!</h1>
      </Container>
    </div>
  );
}

export default Volunteerme;
