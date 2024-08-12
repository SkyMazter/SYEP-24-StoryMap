import "../styles/NavBar.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    // <Container fluid>
    //   <Row id="navbar">
    //     <Col className="justify-content-center d-flex" xs={3}>
    //       <Link to={"/"}>Home</Link>
    //     </Col>
    //     <Col className="justify-content-center d-flex" xs={3}>
    //       <Link to={"/storymap"}>StoryMap</Link>
    //     </Col>
    //     <Col className="justify-content-center d-flex" xs={3}>
    //       <Link to={"/soundscapes"}>SoundScapes</Link>
    //     </Col>
    //     <Col className="justify-content-center d-flex" xs={3}>
    //       <Link>Muralistas</Link>
    //     </Col>
    //   </Row>
    // </Container>
    <Navbar style={{
      backgroundColor: "#083B61",
      color: "white"
    }}>
      <Container fluid >
        <Navbar.Brand><Link to={"/"} style={{
      color: "white"
    }}>SouthSide</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
