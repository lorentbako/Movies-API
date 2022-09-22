import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

import { Outlet } from "react-router-dom";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <>
        <Navbar
          bg="dark"
          variant="dark"
          className="navbar sticky-top navbar-light bg-light"
        >
          <Container>
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Homepage</Nav.Link>
              <Nav.Link href="services">Services</Nav.Link>
              <Nav.Link href="contact">Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Outlet />
      </>
      <Footer />
    </>
  );
}

export default Layout;
