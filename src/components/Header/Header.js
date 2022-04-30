import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand='sm' bg="primary" variant="dark">
        <Container className="">
        <NavbarToggle aria-controls="navbarScroll" data-bs-targert='navbarScroll'></NavbarToggle>
        <NavbarCollapse id="navbarScroll">
          <Navbar.Brand href="#home">Fresh Mart</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </NavbarCollapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
