import { Container, Nav, Navbar } from "react-bootstrap";
import { Outlet, NavLink } from "react-router-dom";

import Footer from "./Footer";
import styles from "./Styles/Layout.module.css";

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
            <Nav className={styles.navLinkContainer}>
              <Navbar.Brand to="/">Movies</Navbar.Brand>
              <NavLink className={styles.navLink} to="/">
                Homepage
              </NavLink>
              <NavLink className={styles.navLink} to="services">
                Services
              </NavLink>
              <NavLink className={styles.navLink} to="signup">
                Sign Up
              </NavLink>
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
