import React from "react";
import ico from "./ico.png"
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";


function Navigation(){
    return(
        <Navbar bg="light" variant="light" className="shadow rounded mx-4 my-4">
        <Container>
          <Navbar.Brand as={Link} to="/"><img src={ico} style={{width:"50px", height:"50px"}} /></Navbar.Brand>
          <Nav className="justify-content-center">
            <Nav.Link  as={Link} to="/Hotspots" className="me-3 lead text-decoration-none">Hotspots</Nav.Link>
            <Nav.Link as={Link} to="/Cuisine" className="me-3 lead text-decoration-none">Cuisine</Nav.Link>
            <Nav.Link as={Link} to="/Lodging" className="me-3 lead text-decoration-none">Lodging</Nav.Link>
            <Nav.Link as={Link} to="/Activities" className="me-3 lead text-decoration-none">Activities</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    );
}; export default Navigation; 