import React from "react";
import "./Styles/Styles.scss";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <div className="row">
            <div className="items">
              Navigate:<br />
              <Link to="services">Homepage<br /></Link> 
              Homepage<br />
              Services<br />
              Contact
            </div>
            <div className="items">
            Address: M554+94 Pristina Kosta Novakoviq,<br/> Prishtinë <br/>Prishtina XK, 10000
            </div>
            <div className="items">
                Copyright 2022
            </div>
            <div className="items">
                Course Website:<br/>
                <a href="https://roiacademy.net/">Visit Website</a>
            </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
