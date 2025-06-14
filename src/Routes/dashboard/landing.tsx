import { Col, Container, Row } from "react-bootstrap";
import  SmallTile  from "../../UI/Card/tileSmall";
import HourlyTransactionGraph from "../../UI/Charts/HourlyTransactionGraph";

export default function LandingPage(){

    const quickData = [
        {
            title: 'Available Rooms',
            icon: 'bi bi-house',
            link: '10 Rooms'
        },
        {
            title: 'Book',
            icon: 'bi bi-calendar-check',
            link: '/book'
        },
        {
            title: 'Events',
            icon: 'bi bi-calendar-event',
            link: '3 Events'
        },
        {
            title: 'Transactions',
            icon: 'bi bi-cash-coin',
            link: '120'
        }
    ]
   
    return <Container className="landing" >
        <Row className="quick-tiles">
            {
                quickData.map((item, index) =>
                    <Col key={index} className="quick-tile">
                        <SmallTile icon={item.icon} title={item.title} value={item.link} />
                    </Col>
                )
            }
            <Row>
                <Col className="quick-tile">
                    <HourlyTransactionGraph/>
                </Col>
            </Row>
        </Row>
             
    </Container>
}