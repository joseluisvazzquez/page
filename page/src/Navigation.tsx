import React from "react";
import ico from "./ico.png"
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";


function Navigation(){
    return(
        <Navbar bg="light" data-bs-theme="light" className="shadow rounded mx-4 my-4">
        <Container>
          <Navbar.Brand as={Link} to="/"><img src={ico} style={{width:"50px", height:"50px"}} /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className="display-1" as={Link} to="/Hotspots" >Hotspots</Nav.Link>
            <Nav.Link as={Link} to="/Cuisine">Cuisine</Nav.Link>
            <Nav.Link as={Link} to="/Lodging">Lodging</Nav.Link>
            <Nav.Link as={Link} to="/Activities">Activities</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    );
}; export default Navigation; 