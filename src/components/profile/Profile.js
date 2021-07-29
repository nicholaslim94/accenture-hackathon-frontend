import "./Profile.css";
import MainNavbar from "../navbar/MainNavbar";
import Container from "react-bootstrap/Container";
import { Form } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";

function Profile() {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [firstJab, setFirstJab] = useState("");
  const [secondJab, setSecondJab] = useState("");

  useEffect(() => {
    var axios = require("axios");

    var config = {
      method: "get",
      url: "http://localhost:8080/account/get/details",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };

    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
        setUsername(response.data.username);
        if (response.data.firstName) {
          setFirstName(response.data.firstName);
        }
        if (response.data.lastName) {
          setLastName(response.data.lastName);
        }
        if (response.data.email) {
          setEmail(response.data.email);
        }
        if (response.data.address) {
          setAddress(response.data.address);
        }
        if (response.data.firstJab) {
          setFirstJab(response.data.firstJab);
        }
        if (response.data.secondJab) {
          setSecondJab(response.data.secondJab);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    var axios = require("axios");
    var data = JSON.stringify({
      username: username,
      firstName: firstName,
      lastName: lastName,
      email: email,
      address: address,
      firstJab: firstJab,
      secondJab: secondJab,
    });

    var config = {
      method: "post",
      url: "http://localhost:8080/account/update/details",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
        console.log("profile updated!");
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div>
      <MainNavbar />
      <Container id="profileContent">
        <h1>My Profile</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group as={Row} className="mb-3" controlId="form-username">
            <Form.Label column sm={2}>
              Username
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" value={username} readOnly />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="form-firstName">
            <Form.Label column sm={2}>
              First Name
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="form-lastName">
            <Form.Label column sm={2}>
              Last Name
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="form-email">
            <Form.Label column sm={2}>
              Email
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="form-address">
            <Form.Label column sm={2}>
              Address
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="form-firstJab">
            <Form.Label column sm={2}>
              First Jab Date
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="date"
                value={firstJab}
                onChange={(e) => {
                  setFirstJab(e.target.value);
                }}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="form-secondJab">
            <Form.Label column sm={2}>
              Second Jab Date
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="date"
                value={secondJab}
                onChange={(e) => {
                  setSecondJab(e.target.value);
                }}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 3, offset: 2 }}>
              <Button
                variant="secondary"
                type="button"
                onClick={useHistory().goBack}
              >
                Back
              </Button>
            </Col>
            <Col sm={{ span: 3 }}>
              <Button varaint="primary" type="submit">
                Update
              </Button>
            </Col>
            <Col sm={{ span: 3 }}>
              <Button variant="success" type="button" href="./myClaimedRewards">
                My Claimed Rewards
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </Container>
    </div>
  );
}

export default Profile;
