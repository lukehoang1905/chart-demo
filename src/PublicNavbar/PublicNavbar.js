import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "./github.png";
import githubIco from "./github.png";

const PublicNavbar = () => {
  return (
    <Navbar expand="lg" sticky="top" style={{ backgroundColor: "#8db596" }}>
      <Navbar.Brand
        style={{
          fontFamily: "lobster",
          fontSize: "2.9rem",
          color: "white",
        }}
      >
        {/* <img src={logo} alt="CoderSchool" /> */}
        Dashboard
      </Navbar.Brand>
      <Nav className="mr-auto" style={{ fontSize: "1.4rem" }}>
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
      </Nav>
      <Nav>
        <a href="#your_github_repo_link" target="_blank">
          <img src={githubIco} alt="Github" width="32px" />
        </a>
      </Nav>
    </Navbar>
  );
};

export default PublicNavbar;
