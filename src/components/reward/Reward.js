import React from "react";
import "./Reward.css";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import rewardImg from "../images/reward.jpeg";

function Reward() {
  return (
    <Card className="cardreward">
      <Card.Img variant="top" src={rewardImg} />
      <Card.Body>
        <Card.Title>Grab your reward</Card.Title>
        <Card.Text>Your reward for getting vaccinated</Card.Text>
        <Button variant="primary">Claim your reward</Button>
      </Card.Body>
    </Card>
  );
}

export default Reward;
