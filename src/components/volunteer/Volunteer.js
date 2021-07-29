import "./Volunteer.css";
import MainNavbar from "../navbar/MainNavbar";
import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";

function Volunteer() {
  function displaycontent() {
    if (localStorage.getItem("token") == null) {
      return (
        <Container className="volunteer-content">
          <h4>You are not logged in! Please log in!!</h4>
        </Container>
      );
    } else {
      return (
        <Container className="volunteer-content">
          <h1>Would you like to volunteer as our committee?</h1>

          <Button color="primary" className="px-4" href="./volunteerMe">
            Yes I am Interested
          </Button>
        </Container>
      );
    }
  }
  return (
    <div>
      <MainNavbar />
      {displaycontent()}
    </div>
  );
}

export default Volunteer;
