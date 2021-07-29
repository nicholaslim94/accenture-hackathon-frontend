import { useState } from "react";

import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "./Login.css";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
// import { AuthContext } from "../../context/AuthContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // const authContext = useContext(AuthContext);
  let history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();

    var axios = require("axios");
    var data = JSON.stringify({
      username: username,
      password: password,
    });

    var config = {
      method: "post",
      url: "http://localhost:8080/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        console.log("logged in! Token: ", response.data.token);
        if (typeof response.data.token === "string") {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("user", username);
          // authContext.authenticated = true;
          // console.log(authContext.authenticated);
          history.push("/");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div className="loginform">
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              required={true}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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

        <Button
          variant="secondary"
          type="button"
          className="Btnstyle"
          onClick={useHistory().goBack}
        >
          Back
        </Button>
        <Button variant="primary" type="submit" className="Btnstyle">
          Login
        </Button>
        <p id="2FA"></p>
      </Form>
    </div>
  );
}

export default Login;
