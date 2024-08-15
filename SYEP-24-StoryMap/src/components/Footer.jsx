import "../styles/Footer.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container className="footer" fluid>
      <br></br>
      <br></br>
      <Row>
        <Col>
          <h3>Learn More!</h3>
          <Link
            to="https://www.elpuente.org"
            style={{
              color: "white",
            }}
          >
            <h4>El Puente De Williamsburg Official Site</h4>
          </Link>
        </Col>
        <Col>
          <Container>
            <Row>
              <Col>
                {" "}
                <h4>Email:</h4>
                <p>info@elpuente.us</p>
              </Col>
              <Col>
                {" "}
                <h4>Phone:</h4>
                <p>(718)-387-0404 </p>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
      <br></br>
    </Container>
  );
};

export default Footer;
