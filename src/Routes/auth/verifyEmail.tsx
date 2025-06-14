import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function VerifyEmailPage(){
   
    return <Container className="login-wrapper" fluid>
        <Row>
            <Col md={5} className="login-form">
                <div className="header">
                    <img id="logo" src={require('../../assessts/svg/logo.svg').default} alt='kuriftu logo' />
                    <p>Please enter verify your email by entering the confirmation code your recievied in your email.</p>
                </div>
                 <Form>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Control placeholder="Confirmation Code" />
                    </Form.Group>
                    <Button variant="primary" type="submit">Verify Email</Button>
                </Form>
                
            </Col>
        </Row>
    </Container>
}