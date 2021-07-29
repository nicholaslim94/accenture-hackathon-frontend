import { Modal, Button, Form } from "react-bootstrap"
import PropTypes from 'prop-types';

import "./ModifyOrgModal.css"
import axios from "axios";
import { jwtGetTokenService } from "../service/jwtService";


function ModifyOrgModal(props) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${jwtGetTokenService()}`

    return (
        <Modal show={props.show} onHide={props.close} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Modify Organization</Modal.Title>
            </Modal.Header>
                <Form className="modify-org-form">
                    <Form.Group className="mb-3" controlId="formAddOrgName">
                        <Form.Label>Org Name</Form.Label>
                        <Form.Control name="name" type="text" placeholder="Enter organization name" onChange={props.onChange} defaultValue={props.data.name}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formAddOrgDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control name="description" type="text" placeholder="Enter organization description" onChange={props.onChange} defaultValue={props.data.description}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formAddOrgAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control name="address" type="text" placeholder="Enter organization address" onChange={props.onChange} defaultValue={props.data.address}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formAddOrgWebsite">
                        <Form.Label>Website</Form.Label>
                        <Form.Control name="website" type="text" placeholder="Enter organization website" onChange={props.onChange} defaultValue={props.data.website}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formAddOrgContact">
                        <Form.Label>Contact</Form.Label>
                        <Form.Control name="no" type="text" placeholder="Enter organization contact" onChange={props.onChange} defaultValue={props.data.no}/>
                    </Form.Group>
                </Form>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.close}>
                Close
                </Button>
                <Button variant="primary" onClick={props.onModify}>
                Modify Organization
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModifyOrgModal

ModifyOrgModal.propTypes = {
    data: PropTypes.object,
    show: PropTypes.bool,
    close: PropTypes.func,
    onChnage: PropTypes.func,
    onModify: PropTypes.func

}