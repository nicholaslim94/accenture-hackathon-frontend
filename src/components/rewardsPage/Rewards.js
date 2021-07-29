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
      console.log(rewardsArray);

      var config = {
        method: "get",
        url: "http://localhost:8080/reward/get/0/10",
        headers: {
          Authorization: updatedToken,
        },
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data.rewardObject));
          setRewardsArray(response.data.rewardObject);
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
      return rewardsArray.map((reward, idx) => (
        <Reward key={idx} info={reward} />
      ));
    }
  }

  return (
    <div>
      <MainNavbar />
      <Container className="rewards-content">
        <h1>Rewards</h1>
        {displayRewards()}
        {/* {rewardsArray.map((reward, idx) => (
          <Reward key={idx} info={reward} />
        ))} */}
      </Container>
    </div>
  );
}

export default Rewards;
