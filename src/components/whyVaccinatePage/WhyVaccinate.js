import "./WhyVaccinate.css";
import MainNavbar from "../navbar/MainNavbar";
import Container from "react-bootstrap/Container";
import { Carousel } from "react-bootstrap";
import ReactPlayer from "react-player";
import Row from "react-bootstrap/Row";
import { Col } from "react-bootstrap";
import vaccine4 from "../images/vaccine4.png";
import vaccine5 from "../images/vaccine5.png";
import vaccine6 from "../images/vaccine6.png";

function WhyVaccinate() {
  return (
    <div>
      <MainNavbar />
      <Container className="whyVaccinate-content">
        <h1>Here are the reasons as to why it is good to vaccinate...</h1>
        <Carousel style={{ padding: "10px" }}>
          <Carousel.Item>
            <ReactPlayer
              url="https://youtu.be/69JKL8jRfWw"
              height="500px"
              width="1300px"
              alt="first video"
            />
          </Carousel.Item>

          <Carousel.Item>
            <ReactPlayer
              url="https://youtu.be/cVrzbws4jU8"
              height="500px"
              width="1300px"
              alt="2nd video"
            />
          </Carousel.Item>

          <Carousel.Item>
            <ReactPlayer
              url="https://youtu.be/wclXZ4W7fwo"
              height="500px"
              width="1300px"
              alt="third video"
            />
          </Carousel.Item>
        </Carousel>

        <Row>
          <Col className="box1">
            <img
              src={vaccine4}
              height="500px"
              width="300px"
              alt="first slide"
            />
          </Col>

          <Col className="box2">
            <img
              src={vaccine5}
              height="500px"
              width="300px"
              alt="second slide"
            />
          </Col>

          <Col className="box3">
            <img
              src={vaccine6}
              height="500px"
              width="300px"
              alt="third slide"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default WhyVaccinate;
