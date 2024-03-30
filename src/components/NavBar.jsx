import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom'; 


import { CartWidget } from "./CartWidget"

export const NavBar = () => {
    return(<>
    <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand to="" as={NavLink}>El Rito</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="/category/hiphop" as={NavLink}>HipHop/Rap</Nav.Link>
            <Nav.Link to="/category/rocknacional"as={NavLink}>Rock Nacional</Nav.Link>
            <Nav.Link to="/category/rockinter"as={NavLink}>Rock Internacional</Nav.Link>
          </Nav>
          < CartWidget/>
        </Container>
      </Navbar>
    
    </>)
}