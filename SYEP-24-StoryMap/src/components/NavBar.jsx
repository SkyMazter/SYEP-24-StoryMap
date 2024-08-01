import "../styles/NavBar.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Container fluid>
      <Row className="bg-secondary">
        <Col className="justify-content-center d-flex" xs={3}>
          <Link to={"/"}>Home</Link>
        </Col>
        <Col className="justify-content-center d-flex" xs={3}>
          <Link to={"/storymap"}>StoryMap</Link>
        </Col>
        <Col className="justify-content-center d-flex" xs={3}>
          <Link>SoundScapes</Link>
        </Col>
        <Col className="justify-content-center d-flex" xs={3}>
          <Link>Muralistas</Link>
        </Col>
      </Row>
    </Container>
  );
};

export default NavBar;
