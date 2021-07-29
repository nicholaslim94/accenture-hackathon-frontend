import axios from "axios";
import { useEffect, useState } from "react";
import { Modal, Button, Table, Form } from "react-bootstrap";
import { OPERATOR_REWARD_ADD, OPERATOR_REWARD_DELETE, OPERATOR_REWARD_GET, OPERATOR_REWARD_MODIFY } from "../constant/operatorRestUrl";

function ManageRewardModal(props) {
    const REWARD_PAGE_SIZE = 5
    const tableHeader = ["ID", "Reward Name", "Description", "Actions"]

    const [forceRender, setForceRender] = useState(1)

    const[addRewardForm, setAddRewardForm] = useState({
        name: "",
        description: ""
    })

    const [rewardPageNum] = useState(1)
    const [setMaxRewardPageNum] = useState(1)
    const [rewardTableData, setRewardTableData] = useState([])

    const[showAddReward, setShowAddReward] = useState(false)

    useEffect(() => {
        if(props.show) {
            fetchReward()
        }
    },[props.show, rewardPageNum, forceRender])

    function fetchReward() {
        axios
            .get(OPERATOR_REWARD_GET+`/${props.orgId}/${rewardPageNum-1}/${REWARD_PAGE_SIZE}`)
            .then((res) => {
                let data = res.data["rewardObject"]
                setMaxRewardPageNum(res.data["totalPageNo"])
                if(data && Array.isArray(data)) {
                    setRewardTableData(data)
                }
                
            })
            .catch((err) => {
                console.log(err)
            })
    }

    function addReward(event) {
        event.preventDefault();
        let obj = Object.assign({},addRewardForm)
        axios
            .post(OPERATOR_REWARD_ADD+`/${props.orgId}`, obj)
            .then((res) => {
                setShowAddReward(false)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    function addRewardFormHandler(event) {
        let obj = Object.assign({}, addRewardForm)
        obj[event.target.name] = event.target.value
        setAddRewardForm(obj)
    }

    // function onModifyClick(data) {
    //     if(typeof data === "object"){
    //         let obj = Object.assign({}, modifyOrgForm)
    //         obj.id = data.id
    //         obj.name = data.name
    //         obj.description = data.description
    //         obj.address = data.address
    //         obj.website = data.website
    //         obj.no = data.no
    //         setModifyOrgForm(obj)
    //         setShowModifyOrgModal(true)
    //     }
    // }
    function onModifyClick(dataElement) {
        console.log(dataElement)
        axios
        .put(OPERATOR_REWARD_MODIFY+`/${dataElement.id}`, dataElement)
        .then((res) => {
        })
        .catch((err) => {
            console.log(err)
        })
    }

    function onDeleteClick(rewardId) {
        axios
            .delete(OPERATOR_REWARD_DELETE+`/${rewardId}`)
            .then((res) => {
                setForceRender(forceRender+1)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <Modal show={props.show} onHide={props.close} backdrop="static" keyboard={false} animation={false} size="xl">
            <Modal.Header closeButton>
                <Modal.Title>Modify Organization</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Button 
                variant="success" 
                className="operator-add-org-button" 
                onClick={() => setShowAddReward(!showAddReward)}
                >New Rewards</Button>
                <div hidden={!showAddReward}>
                    <Form onSubmit={addReward}>
                        <Form.Group className="mb-3" controlId="formAddRewardName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control name="name" type="text" placeholder="Enter reward name" onChange={addRewardFormHandler}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formAddRewardDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control name="description" type="text" placeholder="Enter reward Description" onChange={addRewardFormHandler}/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
               
                
                <Table striped bordered hover responsive className="operator-table">
                    <thead>
                        <tr>
                            {tableHeader.map((headerElement, headerIndex) => (
                                <th key={headerIndex}>{headerElement}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {rewardTableData.map((dataElement, dataIndex) => (
                            <tr key={dataIndex}>
                                <th>{dataElement.id}</th>
                                <th><input type="text" defaultValue={dataElement.name} onChange={(event) => dataElement.name = event.target.value}></input></th>
                                <th><input type="text" defaultValue={dataElement.description} onChange={(event) => dataElement.description = event.target.value}></input></th>
                                <th className="action-th">
                                    <Button variant="warning" className="operator-action-org-button" onClick={() => {onModifyClick(dataElement)}}>Modify</Button>
                                    <Button variant="danger" className="operator-action-org-button" onClick={() => onDeleteClick(dataElement.id)}>Delete</Button>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Modal.Body>
        </Modal>
    )
}

export default ManageRewardModal
