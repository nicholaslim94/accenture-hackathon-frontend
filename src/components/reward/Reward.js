
import React from "react";
import "./Reward.css";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import reward from "../images/reward.jpeg";

function Rewards(){

    return(

<Card className="cardreward">
  <Card.Img variant="top" src={reward}/>
  <Card.Body>
    <Card.Title>Grab your reward</Card.Title>
    <Card.Text>
     Your reward for getting vaccinated
    </Card.Text>
    <Button variant="primary">Claim you reward</Button>
  </Card.Body>
</Card>


    )
}


export default Rewards;