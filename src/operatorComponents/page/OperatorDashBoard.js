import axios from "axios";
import { useState } from "react";
import { Container, Tabs, Tab} from "react-bootstrap";
import { OPERATOR_REWARD_ADD, OPERATOR_REWARD_DELETE, OPERATOR_REWARD_GET, OPERATOR_REWARD_MODIFY } from "../constant/operatorRestUrl";
import ManageOrganizations from "../manageOrganizations/ManageOrganizations";
import { jwtGetTokenService } from "../service/jwtService";

import "./OperatorDashBoard.css"

function OperatorDashBoard() {
    axios.defaults.headers.common['Authorization'] = `Bearer ${jwtGetTokenService()}`


    const REWARD_PAGE_SIZE = 5

    const[tabKey, setTabKey] = useState("organizationKey")

    const [rewardPageNum, setRewardPageNum] = useState(1)

    const [rewardTableData, setRewardTableData] = useState([])

    function fetchReward() {
        axios
            .get(OPERATOR_REWARD_GET+`/${rewardPageNum-1}/${REWARD_PAGE_SIZE}`)
            .then((res) => {
                let data = res.data["rewardObject"]
                if(data && Array.isArray(data)) {
                    console.log(data)
                    setRewardTableData(data)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    function modifyReward(rewardId, data) {
        axios
            .put(OPERATOR_REWARD_MODIFY+`/${rewardId}`, data)
            .then((res) => {
            })
            .catch((err) => {
                console.log(err)
            })
    }

    function deleteReward(orgId) {
        axios
            .delete(OPERATOR_REWARD_DELETE+`/${orgId}`)
            .then((res) => {
            })
            .catch((err) => {
                console.log(err)
            })
    }

    function addReward(orgId, data) {
        axios
            .delete(OPERATOR_REWARD_ADD+`/${orgId}`, data)
            .then((res) => {
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div>
            <Container className="operator-dashboard-container" fluid>
                <h1>Operator Module</h1>
            <Tabs defaultActiveKey={tabKey} id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="organizationKey" title="Manage Organization">
                    <ManageOrganizations/>
                </Tab>
                <Tab eventKey="manageVolunterKey" title=" Manage Volunters" disabled={true}>
                </Tab>
            </Tabs>
            </Container>
        </div>
    )
}
export default OperatorDashBoard