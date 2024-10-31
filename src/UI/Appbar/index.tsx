import React, { useRef, useEffect } from 'react';

import { Button, Container, Form, Nav, Navbar, NavDropdown, Offcanvas} from 'react-bootstrap'

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);


export default function ButtonAppBar() {
  
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  const container = useRef(null);

  useGSAP(
    () => {
        const tl = gsap.timeline();

        tl.from('#logo', { 
          ease: "expo",
          scale: 4,
          delay: 0.5
        }, 0).from('.navbar-content',{
          backgroundColor: '#F5E2DF',
          ease: "expo",
          delay: 0.5
        }, 0);
        tl.from('.navbar-content', { 
          ease: "expoInOut",
          height: '100vh',
          duration: 0.3,
          delay: 0.15
        });
        tl.from(["#menu-button", "#login-button", ".navbar-hambergure"],{
          opacity: 0
        });

        

    },
    { scope: container }
);
  return (
    <>
    <Navbar expand={'false'} fixed="top" className="navbar" ref={container}>
       <Container className="navbar-content" fluid>
        <Navbar.Toggle className='navbar-hambergure' aria-controls={'offcanvasNavbar-expand-false'} />
        <img id="logo" src={require('../../assessts/svg/logo.svg').default} alt='kuriftu logo' />
        <Button id="login-button">BOOK</Button>
        <Navbar.Offcanvas
            id='offcanvasNavbar-expand-false'
            aria-labelledby='offcanvasNavbarLabel-expand-false'
            placement="start"
          >
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                 {['Make a Reservation','Destinations', 'Resorts', 'Experiences', 'Wellness'].map((text, index) => (
                   <Nav.Link href="#action1" key={index}>{text}</Nav.Link>
                 ))}

              </Nav>

               <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Home</Nav.Link>
              </Nav>
            </Offcanvas.Body>
            
          </Navbar.Offcanvas>
       </Container>
    </Navbar>
    </>
  );
}
