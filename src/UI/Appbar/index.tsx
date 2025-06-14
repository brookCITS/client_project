import React, { useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button, Container, Form, Nav, Navbar, NavDropdown, Offcanvas} from 'react-bootstrap'
import { LinkContainer} from 'react-router-bootstrap'


export default function Appbar() {
  
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  const location = useLocation();
  return (
    <>
    <Navbar expand={'md'} fixed="top" className="navbar col-md-3">
       <Container className="navbar-content" fluid>
        <Navbar.Toggle className='navbar-hambergure' aria-controls={'offcanvasNavbar-expand-false'} />
        <Link to={'/'} className="navbar-brand">
          <img id="logo" src={require('../../assessts/svg/logo.svg').default} alt='kuriftu logo' />
        </Link>
        
        <Navbar.Offcanvas
            id='offcanvasNavbar-expand-false'
            aria-labelledby='offcanvasNavbarLabel-expand-false'
            placement="start"
          >
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                 <LinkContainer className={`navbar-link ${location.pathname == '/' && 'active'}`} to="/">
                    <Nav.Link>Dashboard</Nav.Link>
                </LinkContainer>
                <LinkContainer className={`navbar-link ${location.pathname == '/bookings' && 'active'}`} to="/bookings">
                    <Nav.Link>Bookings</Nav.Link>
                </LinkContainer>
                <LinkContainer className={`navbar-link ${location.pathname == '/settings' && 'active'}`} to="/settings">
                    <Nav.Link>Settings</Nav.Link>
                </LinkContainer>
                <LinkContainer className={`navbar-link ${location.pathname == '/help' && 'active'}`} to="/help">
                    <Nav.Link>Help</Nav.Link>
                </LinkContainer>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
       </Container>
    </Navbar>
    </>
  );
}





