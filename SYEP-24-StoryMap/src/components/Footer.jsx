import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Footer = () => {
  return (
    <Container>
      <Row>
        <Col>
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
                <h4>example@email.com</h4>
              </Col>
              <Col>
                {" "}
                <h4>Phone #</h4>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
