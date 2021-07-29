import axios from "axios";
import { useState } from "react";
import { Container, Tabs, Tab } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { OPERATOR_LOGIN, OPERATOR_REGISTER } from "../constant/operatorRestUrl";
import OperatorLogin from "../login/OperatorLogin";
import OperatorRegister from "../register/OperatorRegistration";
import { jwtLoginService, jwtLogoutService } from "../service/jwtService";

import "./Operator.css"


function Operator() {
    let history = useHistory()
    const [tabKey] = useState("loginKey")

    const [loginFrom, setLoginForm] = useState({})
    const [registerFrom, setRegisterForm] = useState({})

    function doLogin(event) {
        event.preventDefault()
        axios
        .post(OPERATOR_LOGIN, loginFrom)
        .then((res) => {
            let token = res.data.token
            jwtLoginService(token)
            history.push("/operator/dashboard")
        })
        .catch((err) => {
            console.log(err)
        })
    }

    function doRegister(event) {
        event.preventDefault()
        axios
        .post(OPERATOR_REGISTER, registerFrom)
        .then((res) => {
            jwtLogoutService()
            window.location.reload()
        })
        .catch((err) => {
            console.log(err)
        })
    }

    function loginFormHandler(event) {
        let obj = Object.assign({}, loginFrom)
        obj[event.target.name] = event.target.value
        setLoginForm(obj)
    }

    function registerFormHandler(event) {
        let obj = Object.assign({}, registerFrom)
        obj[event.target.name] = event.target.value
        setRegisterForm(obj)
    }

    return (
    <div>
        <Container className="operator-login-tab">
            <h1 className="display-1">Operator</h1>
            <hr/>
            <div className="operator-tab-space"></div>
            <Tabs defaultActiveKey={tabKey} id="uncontrolled-tab-example" className="mb-3" transition={false}>
                <Tab eventKey="loginKey" title="Login">
                    <OperatorLogin onSubmit={doLogin} onChange={loginFormHandler}/>
                </Tab>
                <Tab eventKey="registerKey" title="Register">
                    <OperatorRegister onSubmit={doRegister} onChange={registerFormHandler}/>
                </Tab>
            </Tabs>
        </Container>
    </div>
    )
}

export default Operator