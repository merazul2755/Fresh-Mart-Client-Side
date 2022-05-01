import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect sticky="top" expand='sm' bg="primary" variant="dark">
        <Container>
        <NavbarToggle aria-controls="navbarScroll" data-bs-targert='navbarScroll'></NavbarToggle>
        <NavbarCollapse id="navbarScroll">
          <Navbar.Brand href="#home">Fresh Mart</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link as={Link} to='/blogs'>Blogs</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to='/login' >Login</Nav.Link>
          </Nav>
        </NavbarCollapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
