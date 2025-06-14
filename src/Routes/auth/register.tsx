import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { generateDays, generateMonths, generateYears } from "../../Utils/calendar";


export default function SignupPage(){
   
    return <Container className="signup-wrapper" fluid>
        <Row className="signup-wrapper-row">
            <Col lg={5} className="signup-header">
                <img id="logo" src={require('../../assessts/svg/logo.svg').default} alt='kuriftu logo' />
                <p>Sign up to get started</p>
            </Col>
            <Col lg={5} className="signup-form">
                <Row className="signup-form-wrapper">
                    <Col lg={12}>
                         <Form>
                            <Row className="mb-3">
                                <Col lg={6}>
                                    <Form.Control placeholder="First Name" />
                                </Col>
                                <Col lg={6}>
                                    <Form.Control placeholder="Last Name" />
                                </Col>
                            </Row>
                            <Form.Group className="mb-3" controlId="formGroupBirthday">
                                <Form.Label>Date of Birth</Form.Label>
                                <Row className="mb-3">
                                    <Col lg={3}>
                                            <Form.Select aria-label="Day">
                                                <option>Day</option>
                                                {generateDays().map(day => (
                                                    <option key={day} value={day}>{day}</option>
                                                ))}
                                            </Form.Select>
                                        </Col>
                                        <Col lg={6}>
                                            <Form.Select aria-label="Month">
                                                <option>Month</option>
                                                {generateMonths().map((month, index) => (
                                                    <option key={index} value={index + 1}>{month}</option>
                                                ))}
                                            </Form.Select>
                                        </Col>
                                        <Col lg={3}>
                                            <Form.Select aria-label="Year">
                                                <option>Year</option>
                                                {generateYears().map(year => (
                                                    <option key={year} value={year}>{year}</option>
                                                ))}
                                            </Form.Select>
                                        </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupContact">
                                <Form.Control type="email" placeholder="Email" />
                                <Form.Control type="phone" placeholder="Phone" />
                            </Form.Group>
                            
                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                <Form.Control type="password" placeholder="Password" />
                                <Form.Control type="password" placeholder="Password again" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupConcent">
                                <p className="signup-form-consent">By clicking Register, you agree to our <Link to={'/terms'}>Terms of use</Link> and <Link to={'/terms'}>Data Policy</Link>. Learn how we use cookies and similar technology in our <Link to={'/terms'}>Cookie Policy</Link>.</p>
                            </Form.Group>
                            <Button variant="primary" type="submit">Register</Button>
                        </Form>
                        <hr className="w-half border-neutral-400" />
                        <div className="links">
                            <span>Already have an account? </span>
                            <Link to={'/login'} className="font-thin text-sm cursor-pointer text-neutral-400">Login</Link>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
}