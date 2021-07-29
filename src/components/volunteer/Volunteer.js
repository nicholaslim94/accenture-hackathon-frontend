import "./Volunteer.css";
import MainNavbar from "../navbar/MainNavbar";
import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";
import Volunteerme from "./Volunteerme";

function Volunteer() {
  return (
    
    <div>
      <MainNavbar />
      <Container className="volunteer-content">
        <h1>Would you like to volunteer as our committee?</h1>

        <Button color="primary" className="px-4"
                href="./whyVaccinate">
                 Yes I am Interested
                </Button>
      </Container>
      <Volunteerme/>
    </div>
  );
}

export default Volunteer;
