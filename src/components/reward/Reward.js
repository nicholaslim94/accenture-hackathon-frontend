import React, { useEffect, useState } from "react";
import "./Reward.css";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import rewardImg from "../images/reward.jpeg";
import { ACCOUNT_ADD_REWARDS } from "../../constants/rest";

function Reward(props) {
  const [claimed, setClaimed] = useState(false);
  const [claimText, setClaimText] = useState("Claim your reward");
  const [claimStyle, setClaimStyle] = useState("primary");
  const [code] = useState(props.myRerwardId.split("-", 1));

  useEffect(() => {
    if (props.myRewardPg) {
      setClaimed(props.claimed);
      setClaimStyle("secondary");
      setClaimText(code);
    }
  }, []);

  function handleClaimReward(e) {
    e.preventDefault();

    var axios = require("axios");

    var config = {
      method: "post",
      url: ACCOUNT_ADD_REWARDS + props.info.id,
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
