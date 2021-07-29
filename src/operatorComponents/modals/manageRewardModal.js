import axios from "axios";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { OPERATOR_REWARD_GET } from "../constant/operatorRestUrl";

function ManageRewardModal(props) {
    const REWARD_PAGE_SIZE = 10

    const [rewardPageNum, setRewardPageNum] = useState(1)
    const [orgMaxPageNum, setMaxRewardPageNum] = useState(1)
    const [orgTableData, setRewardTableData] = useState([])

    function fetchReward() {
        axios
            .get(OPERATOR_REWARD_GET+`/${props.orgId}/${rewardPageNum-1}/${REWARD_PAGE_SIZE}`)
            .then((res) => {
                let data = res.data["orgObjects"]
                setMaxRewardPageNum(res.data["totalPageNo"])
                if(data && Array.isArray(data)) {
                    setRewardTableData(data)
                }
                
            })
            .catch((err) => {
                console.log(err)
            })
    }
    return (
        <Container>
            
        </Container>
    )
}

export default ManageRewardModal