import { Col, Container, Row } from "react-bootstrap";
import {about_kuriftu} from '../Data/static_text';

import { useRef } from 'react';

import Gallery from '../UI/Gallery';
import CarouselItems from '../Data/gallery_items';
import HeroPanel from '../UI/Card/heroPanel';


export default function LandingPage(){
   
    return <Container className="landing" fluid>
        <video className="landing-video" src="https://kuriftu-media-bucket.s3.amazonaws.com/guest_site/videos/landing_hero.MOV" autoPlay loop muted></video>

        {
            CarouselItems.map((CarouselItem, index) => (
                <Gallery key={index} items={CarouselItem.images} caption={CarouselItem.caption}/>
                )
            )
        }
        <HeroPanel classNames="hero-container" backgroundImage={about_kuriftu.backgroundImage}>
            <Col md={12}className="hero-title"><h1>{about_kuriftu.title}</h1></Col>
            {
                about_kuriftu.paragraphs.map((paragraph, index) => (
                    <Col className="hero-text" md={6} key={index}><p>{paragraph}</p></Col>
                    ))
            }
        </HeroPanel>
        
        
    </Container>
}