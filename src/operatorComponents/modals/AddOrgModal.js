import { Modal, Button, Form } from "react-bootstrap"
import PropTypes from 'prop-types';

import "./AddOrgModal.css"
import { useState } from "react";
import axios from "axios";
import { OPERATOR_ORG_ADD } from "../constant/operatorRestUrl";
import { jwtGetTokenService } from "../service/jwtService";


function AddOrgModal(props) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${jwtGetTokenService()}`
    const [addOrgForm, setAddOrgForm] = useState({
        name: "",
        description: "",
        address: "",
        website: "",
        no: ""
    })

    function addOrg() {
        let obj = Object.assign({}, addOrgForm)
        axios
            .post(OPERATOR_ORG_ADD, obj)
            .then((res) => {
                props.close()
            })
            .catch((err) => {
                console.log(err)
            })
    }

    function onChange(event) {
        let obj = Object.assign({}, addOrgForm)    
        obj[event.target.name] = event.target.value
        setAddOrgForm(obj)
    }
    return (
        <Modal  show={props.show} onHide={props.close} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Add Organization</Modal.Title>
            </Modal.Header>

                <Form className="add-org-form">
                    <Form.Group className="mb-3" controlId="formAddOrgName">
                        <Form.Label>Org Name</Form.Label>
                        <Form.Control name="name" type="text" placeholder="Enter organization name" onChange={onChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formAddOrgDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control name="description" type="text" placeholder="Enter organization description" onChange={onChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formAddOrgAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control name="address" type="text" placeholder="Enter organization address" onChange={onChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formAddOrgWebsite">
                        <Form.Label>Website</Form.Label>
                        <Form.Control name="website" type="text" placeholder="Enter organization website" onChange={onChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formAddOrgContact">
                        <Form.Label>Contact</Form.Label>
                        <Form.Control name="no" type="text" placeholder="Enter organization contact" onChange={onChange}/>
                    </Form.Group>
                </Form>

            <Modal.Footer>
                <Button variant="secondary" onClick={props.close}>
                Close
                </Button>
                <Button variant="primary" onClick={addOrg}>
                Add Organization
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AddOrgModal

AddOrgModal.propTypes = {
    show: PropTypes.bool,
    close: PropTypes.func,
}