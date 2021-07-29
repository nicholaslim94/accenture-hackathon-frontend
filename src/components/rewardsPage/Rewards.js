import "./Rewards.css";
import MainNavbar from "../navbar/MainNavbar";
import Container from "react-bootstrap/Container";
import Reward from "../reward/Reward";
import { useEffect, useState } from "react";

function Rewards() {
  const [rewardsArray, setRewardsArray] = useState([]);

  useEffect(() => {
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
        console.log(JSON.stringify(response.data.rewardObject));
        setRewardsArray(response.data.rewardObject);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <MainNavbar />
      <Container className="rewards-content">
        <h1>Rewards</h1>

        {rewardsArray.map((reward, idx) => (
          <Reward key={idx} info={reward} />
        ))}
      </Container>
    </div>
  );
}

export default Rewards;
