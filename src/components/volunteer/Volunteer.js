import "./Volunteer.css";
import MainNavbar from "../navbar/MainNavbar";
import Container from "react-bootstrap/Container";

function Volunteer() {
  return (
    <div>
      <MainNavbar />
      <Container className="volunteer-content">
        <h1>Volunteer</h1>
      </Container>
    </div>
  );
}

export default Volunteer;
