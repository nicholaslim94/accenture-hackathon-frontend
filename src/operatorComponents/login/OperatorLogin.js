import { Button, Container, Form } from "react-bootstrap";
import PropTypes from 'prop-types';


function OperatorLogin(props) {
    return (
        <div>
            <Container>
                <Form onSubmit={props.onSubmit}>
                    <Form.Group className="mb-3" controlId="formLoginUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter login username" onChange={props.onChange} name="username"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formLoginPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={props.onChange} name="password"/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    )
}

export default OperatorLogin

OperatorLogin.propTypes = {
    onSubmit: PropTypes.func,
    onChange: PropTypes.func,
}