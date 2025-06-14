import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function ResetPasswordPage(){
   
    return <Container className="login-wrapper" fluid>
        <Row>
            <Col md={5} className="login-form">
                <div className="header">
                    <img id="logo" src={require('../../assessts/svg/logo.svg').default} alt='kuriftu logo' />
                    <p>Please enter your new password and click reset.</p>
                </div>
                 <Form>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Control type="password" placeholder="Password again" />
                    </Form.Group>
                    <Button variant="primary" type="submit">Reset Password</Button>
                </Form>
                
            </Col>
        </Row>
    </Container>
}