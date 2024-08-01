import "../styles/Footer.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Footer = () => {
  return (
    <Container className="t-h-e-b-o-t-t-o-m" fluid>
      <br></br>
      <br></br>
      <Row>
        <Col className="">
          <h3>Learn More!</h3>
          <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Dignissim
            pulvinar venenatis habitasse per tellus sociosqu eros rhoncus
            adipiscing. Elit dignissim imperdiet ac massa facilisi quam
            sollicitudin conubia.
          </p>
        </Col>
        <Col>
          <Container>
            <Row>
              <Col>
                {" "}
                <h4>Email:</h4>
                <p>example@email.com</p>
              </Col>
              <Col>
                {" "}
                <h4>Phone:</h4>
                <p>800-888-8888</p>
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