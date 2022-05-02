import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);
  

  return (
    <div>
      <Navbar
        collapseOnSelect
        sticky="top"
        expand="sm"
        bg="primary"
        variant="dark"
      >
        <Container>
          <NavbarToggle
            aria-controls="navbarScroll"
            data-bs-targert="navbarScroll"
          ></NavbarToggle>
          <NavbarCollapse id="navbarScroll">
            <Navbar.Brand href="#home">Fresh Mart</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link as={Link} to="/blogs">
                Blogs
              </Nav.Link>
            </Nav>
            <Nav>

              {user ? (
                <div className="d-flex align-items-center">
                  <p className="me-2 text-light">{user ? user.displayName : ''}</p>
                  <button onClick={()=>signOut(auth)} className="btn btn-light fw-bold text-danger ">LogOut</button>
                </div>
              ) : (
                
                <Nav.Link className="btn btn-light text-primary" as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
