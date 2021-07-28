import "./Profile.css";
import MainNavbar from "../navbar/MainNavbar";
import Container from "react-bootstrap/Container";

function Profile() {
  return (
    <div>
      <MainNavbar />
      <Container id="profileContent">
        <h1>hello</h1>
      </Container>
    </div>
  );
}

export default Profile;
