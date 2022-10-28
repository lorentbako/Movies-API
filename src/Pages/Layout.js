import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

import { Outlet, NavLink } from "react-router-dom";
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
              <NavLink to="/">Homepage</NavLink>
              <NavLink to="services">Services</NavLink>
              <NavLink to="signup">Sign Up</NavLink>
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
