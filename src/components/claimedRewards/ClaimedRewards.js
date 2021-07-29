import "./ClaimedRewards.css";
import { Container } from "react-bootstrap";
import MainNavbar from "../navbar/MainNavbar";
import { useEffect, useState } from "react";
import Reward from "../reward/Reward";

function ClaimedRewards() {
  const [myRewards, setMyRewards] = useState([]);

  useEffect(() => {
    var axios = require("axios");

    var config = {
      method: "get",
      url: "http://localhost:8080/account/get/rewards",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setMyRewards(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  function displayMyRewards() {
    if (myRewards.length === 0) {
      return (
        <Container>
          <p>Sorry, you have not claimed any rewards yet</p>
        </Container>
      );
    } else {
      return myRewards.map((myReward, idx) => (
        <Reward
          key={idx}
          info={myReward}
          claimed={true}
          myRewardPg={true}
          myRerwardId={myReward.accountReward[idx].id}
        />
      ));
    }
  }

  return (
    <div>
      <MainNavbar />
      <Container className="claimedRewards-content">
        <h1 className="claimedRewards-header"> My Claimed Rewards </h1>
        {displayMyRewards()}
      </Container>
    </div>
  );
}

export default ClaimedRewards;
