import "../styles/NavBar.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar
      style={{
        backgroundColor: "#083B61",
        color: "white",
      }}
    >
      <Container fluid>
        <Navbar.Brand>
          <Link
            to={"/"}
            className="quando-regular px-3"
            style={{
              color: "white",
            }}
          >
            The SouthSide Story
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link
                to={"/storymap"}
                style={{
                  color: "white",
                }}
              >
                Storymap
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to={"/soundscapes"}
                style={{
                  color: "white",
                }}
              >
                Soundscapes
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to={"/muralistas"}
                style={{
                  color: "white",
                }}
              >
                Muralistas
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to={"/videos"}
                style={{
                  color: "white",
                }}
              >
                PSA Videos
              </Link>
            </Nav.Link>
            {/* <NavDropdown title="PSA Videos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
