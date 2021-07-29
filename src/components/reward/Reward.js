import React, { useState } from "react";
import "./Reward.css";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import rewardImg from "../images/reward.jpeg";

function Reward(props) {
  const [claimed, setClaimed] = useState(false);
  const [claimText, setClaimText] = useState("Claim your reward");
  const [claimStyle, setClaimStyle] = useState("primary");

  function handleClaimReward(e) {
    e.preventDefault();

    var axios = require("axios");

    var config = {
      method: "post",
      url: "http://localhost:8080/account/add/rewards/" + props.info.id,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };

    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
        setClaimed(true);
        setClaimText("Claimed");
        setClaimStyle("secondary");
        console.log("Reward claimed!");
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <Card className="cardreward">
      <Card.Img variant="top" src={rewardImg} />
      <Card.Body>
        <Card.Title>{props.info.name}</Card.Title>
        <Card.Text>{props.info.description}</Card.Text>
        <Button
          variant={claimStyle}
          onClick={handleClaimReward}
          disabled={claimed}
        >
          {claimText}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Reward;
