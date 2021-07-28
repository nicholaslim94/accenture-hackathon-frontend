import "./Rewards.css";
import MainNavbar from "../navbar/MainNavbar";
import Container from "react-bootstrap/Container";

function Rewards() {
  return (
    <div>
      <MainNavbar />
      <Container className="rewards-content">
        <h1>Rewards</h1>
      </Container>
    </div>
  );
}

export default Rewards;
