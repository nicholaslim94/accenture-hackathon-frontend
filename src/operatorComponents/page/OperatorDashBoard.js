import axios from "axios";
import { useState } from "react";
import { Container, Tabs, Tab} from "react-bootstrap";
import ManageOrganizations from "../manageOrganizations/ManageOrganizations";
import { jwtGetTokenService } from "../service/jwtService";

import "./OperatorDashBoard.css"

function OperatorDashBoard() {
    axios.defaults.headers.common['Authorization'] = `Bearer ${jwtGetTokenService()}`

    const[tabKey] = useState("organizationKey")

    return (
        <div>
            <Container className="operator-dashboard-container" >
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