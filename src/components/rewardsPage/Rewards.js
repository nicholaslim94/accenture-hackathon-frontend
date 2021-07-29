import "./Rewards.css";
import MainNavbar from "../navbar/MainNavbar";
import Container from "react-bootstrap/Container";
import Reward from "../reward/Reward";
import { useEffect, useState } from "react";

function Rewards() {
  const [rewardsArray, setRewardsArray] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("token") != null) {
      var axios = require("axios");
      var updatedToken = "Bearer " + localStorage.getItem("token");
      console.log(updatedToken);

      var config = {
        method: "get",
        url: "http://localhost:8080/reward/get/0/10",
        headers: {
          Authorization: updatedToken,
        },
      };

      axios(config)
        .then(function (response) {
          if (Array.isArray(response.data.rewardObject)) {
            console.log(JSON.stringify(response.data.rewardObject));
            setRewardsArray(response.data.rewardObject);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, []);

  function displayRewards() {
    if (localStorage.getItem("token") == null) {
      return (
        <Container>
          <p>Please login to see the rewards</p>
        </Container>
      );
    } else {
      if (rewardsArray.length === 0) {
        return (
          <Container>
            <p>Sorry, there are no rewards available</p>
          </Container>
        );
      } else {
        return rewardsArray.map((reward, idx) => (
          <Reward
            key={idx}
            info={reward}
            myRewardPg={false}
            myRerwardId={rewardsArray[idx].id}
          />
        ));
      }
    }
  }

  return (
    <div>
      <MainNavbar />
      <Container className="rewards-content">
        <h1 className="rewards-header">Rewards</h1>
        {displayRewards()}
        {/* {rewardsArray.map((reward, idx) => (
          <Reward key={idx} info={reward} />
        ))} */}
      </Container>
    </div>
  );
}

export default Rewards;
