import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function LoginPage(){
   
    return <Container className="login-wrapper" fluid>
        <Row>
            <Col md={5} className="login-form">
                <div className="header">
                    <img id="logo" src={require('../../assessts/svg/logo.svg').default} alt='kuriftu logo' />
                    <h1>Welcome to Kuriftu</h1>
                </div>
                 <Form>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">Login</Button>
                </Form>
                <hr className="w-half border-neutral-400" />
                <div className="links">
                    <Link to={'/forgot-password'} className="text-neutral-400">Forgot password</Link>
                    <Link to={'/register'} className="font-thin text-sm cursor-pointer text-neutral-400">Register</Link>
                </div>
            </Col>
        </Row>
    </Container>
}