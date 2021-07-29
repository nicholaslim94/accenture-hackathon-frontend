import React from "react";
import "./Reward.css";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import rewardImg from "../images/reward.jpeg";

function Reward(props) {
  return (
    <Card className="cardreward">
      <Card.Img variant="top" src={rewardImg} />
      <Card.Body>
        <Card.Title>{props.info.name}</Card.Title>
        <Card.Text>{props.info.description}</Card.Text>
        <Button variant="primary">Claim your reward</Button>
      </Card.Body>
    </Card>
  );
}

export default Reward;
