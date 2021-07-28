import { useState } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import "./Register.css";
import { useHistory } from "react-router-dom";
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Result, setResult] = useState("");
  const [username, setUsername] = useState("");
  

  function handleSubmit(event) {
    event.preventDefault();
    console.log(email);
    console.log(password);
    console.log(username);
    console.log(FirstName);
    console.log(LastName);



    //console.log(JSON.stringify(requestbody));
    axios
      .post("http://localhost:8080/register", {
        username: username,
        password: password,
        FirstName:FirstName,
        LastName: LastName

      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setResult(JSON.stringify(res.data));
      });
   
  }
  return (
    <div class="Container registerform">
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="First Name"
              required={true}
              value={FirstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="Field"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Last Name"
              required={true}
              value={LastName}
              onChange={(e) => setLastName(e.target.value)}
              className="Field"
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              required={true}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="Field"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              required={true}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="Field"
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">

        <Form.Group as={Col} controlId="formBasicEmail">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Username"
              required={true}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="Field"
            />
        </Form.Group>
        </Row>


        <Button
          variant="secondary"
          type="button"
          className="Btnstyle"
          onClick={useHistory().goBack}
        >
          Back

          </Button>
        <Button variant="primary" type="submit" className="Btnstyle">
          Register
        </Button>
        <p id="2FA"></p>
      </Form>
    </div>
  );
}

export default Register;
