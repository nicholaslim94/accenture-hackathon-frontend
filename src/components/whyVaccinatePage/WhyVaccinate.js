import "./WhyVaccinate.css";
import MainNavbar from "../navbar/MainNavbar";
import Container from "react-bootstrap/Container";

function WhyVaccinate() {
  return (
    <div>
      <MainNavbar />
      <Container className="whyVaccinate-content">
        <h1>Here are the reasons as to why it is good to vaccinate...</h1>
      </Container>
    </div>
  );
}

export default WhyVaccinate;
