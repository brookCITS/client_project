import { Outlet } from 'react-router';
import { Container, Row, Col } from 'react-bootstrap';
//components
import Appbar from './UI/Appbar';


function App() {
  return (
     <Container fluid className="App d-flex flex-column vh-100">
            
              <Row className="flex-grow-1">
                <Appbar/>
                {/* Content Area */}
                <Col className='content-wrapper'>
                  <Row className='content'>
                    <Outlet />
                    {/* Sidebar Footer */}
                    <footer className="text-white text-center py-3 w-100">
                        <p>© 2023 MyBrand. All rights reserved.</p>
                    </footer>
                  </Row>
                  
                  
                </Col>
            </Row>
    </Container>
   
  );
}

export default App;