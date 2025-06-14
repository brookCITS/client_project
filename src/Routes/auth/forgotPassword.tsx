import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function ForgotPasswordPage(){
   
    return <Container className="login-wrapper" fluid>
        <Row>
            <Col md={5} className="login-form">
                <div className="header">
                    <img id="logo" src={require('../../assessts/svg/logo.svg').default} alt='kuriftu logo' />
                    <p>Please enter your email to recieve a redirect link to update your password.</p>
                </div>
                 <Form>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>
                    <Button variant="primary" type="submit">Forgot Password</Button>
                </Form>
                
            </Col>
        </Row>
    </Container>
}