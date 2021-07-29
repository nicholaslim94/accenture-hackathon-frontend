import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Container, Pagination, Table } from "react-bootstrap"
import { OPERATOR_ORG_DELETE, OPERATOR_ORG_GET, OPERATOR_ORG_MODIFY } from '../constant/operatorRestUrl';
import AddOrgModal from '../modals/AddOrgModal';
import ManageRewardModal from '../modals/manageRewardModal';
import ModifyOrgModal from '../modals/ModifyOrgModal';

import "./ManageOrganizations.css"

function ManageOrganizations() {
    const ORG_PAGE_SIZE = 5
    const tableHeader = ["ID", "Organization Name", "Description", "Address", "website", "Actions"]

    const [orgPageNum, setOrgPageNum] = useState(1)
    const [orgMaxPageNum, setMaxOrgPageNum] = useState(1)
    const [orgTableData, setOrgTableData] = useState([])

    const [showAddOrgModal, setShowAddOrgModal] = useState(false)
    const [showModifyOrgModal, setShowModifyOrgModal] = useState(false)
    const [showManageRewardOrgModal, setShowManageRewardOrgModal] = useState(false)

    const [modifyOrgForm, setModifyOrgForm] = useState({
        id: "",
        name: "",
        description: "",
        address: "",
        website: "",
        no: ""
    })
    const [manageRewardId, setManageRewardId] = useState("")

    useEffect(() => {
        fetchOrg()
    },[orgPageNum,showAddOrgModal,showModifyOrgModal])

    function onModifyClick(data) {
        if(typeof data === "object"){
            let obj = Object.assign({}, modifyOrgForm)
            obj.id = data.id
            obj.name = data.name
            obj.description = data.description
            obj.address = data.address
            obj.website = data.website
            obj.no = data.no
            setModifyOrgForm(obj)
            setShowModifyOrgModal(true)
        }
    }

    function onManageRewardClick(id) {
        if(typeof data === "string"){
            setManageRewardId(id)
            setShowManageRewardOrgModal(true)
        }
    }

    function onModifyChange(event) {
        let obj = Object.assign({}, modifyOrgForm)    
        obj[event.target.name] = event.target.value
        setModifyOrgForm(obj)
    }

    function onManageRewardClick(event) {

    }

    function fetchOrg() {
        axios
            .get(OPERATOR_ORG_GET+`/${orgPageNum-1}/${ORG_PAGE_SIZE}`)
            .then((res) => {
                let data = res.data["orgObjects"]
                setMaxOrgPageNum(res.data["totalPageNo"])
                if(data && Array.isArray(data)) {
                    setOrgTableData(data)
                }
                
            })
            .catch((err) => {
                console.log(err)
            })
    }
    
    function modifyOrg() {
        let obj = Object.assign({}, modifyOrgForm)
        axios
            .put(OPERATOR_ORG_MODIFY+`/${obj.id}`, obj)
            .then((res) => {
                setShowModifyOrgModal(false)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    function onDeleteClick(id) {
        let obj = Object.assign({}, modifyOrgForm)
        axios
            .delete(OPERATOR_ORG_DELETE+`/${id}`)
            .then((res) => {

            })
            .catch((err) => {
                console.log(err)
            })
    }

    function handlePageChange(event) {
        setOrgPageNum(event.target.text)
    }
    let pageItem = []
    for (let number = 1; number <= orgMaxPageNum; number++) {
        pageItem.push(
          <Pagination.Item key={number} active={number === orgPageNum} onClick={handlePageChange}>
            {number}
          </Pagination.Item>,
        );
    }

    return (
    <div>
        <Container>
            <Button 
            variant="success" 
            className="operator-add-org-button" 
            onClick={() => setShowAddOrgModal(true)}
            >New Organization</Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        {tableHeader.map((headerElement, headerIndex) => (
                            <th key={headerIndex}>{headerElement}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {orgTableData.map((dataElement, dataIndex) => (
                        <tr key={dataIndex}>
                            <th>{dataElement.id}</th>
                            <th>{dataElement.name}</th>
                            <th>{dataElement.description}</th>
                            <th>{dataElement.address}</th>
                            <th>{dataElement.website}</th>
                            <th>
                                <Button variant="info" className="operator-action-org-button" onClick={() => onManageRewardClick(dataElement)}>Manage Rewards</Button>
                            </th>
                            <th>
                                <Button variant="warning" className="operator-action-org-button" onClick={() => onModifyClick(dataElement)}>Modify</Button>
                                <Button variant="danger" className="operator-action-org-button" onClick={() => onDeleteClick(dataElement.id)}>Delete</Button>
                            </th>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <AddOrgModal show={showAddOrgModal} close={() => setShowAddOrgModal(false)}/>
            <ModifyOrgModal show={showModifyOrgModal} close={() => setShowModifyOrgModal(false)} data={modifyOrgForm} onChange={onModifyChange} onModify={modifyOrg}/>
            <ManageRewardModal show={showManageRewardOrgModal} close={() => setShowManageRewardOrgModal(false)}/>
            
            <Pagination>{pageItem}</Pagination>
        </Container>
    </div>
    )
}

export default ManageOrganizations
