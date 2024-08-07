import "./App.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Figure from "react-bootstrap/Figure";
import Image from "react-bootstrap/Image";
import bridge from "./assets/bridge.png";
import art from "./assets/art.png";
import water from "./assets/water.png";
import microphone from "./assets/microphone.png";
import circleart from "./assets/circleart.png";

import { Link } from "react-router-dom";
import img from "./assets/placeholder.png";

import Footer from "./components/Footer.jsx";
import NavBar from "./components/NavBar.jsx";

function App() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col md={3}>
            <Image fluid src={bridge}></Image>
          </Col>
          <Col md={9}>
            <Container fluid>
              {" "}
              <Row>
                {" "}
                <Col xs={12}>
                  <NavBar></NavBar>
                </Col>
              </Row>
              <Row>
                <Col>
                  {" "}
                  <h1 className="quando-regular text-center">
                    SouthSide Story Map
                  </h1>
                  <p className="judson-regular">
                    The Summer Youth Employment Program, is a national program
                    that connects youth, ages 14-21, to paid internships of
                    their choice. This program allows youth to gain professional
                    work experience along with learning more about their chosen
                    career paths.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  {" "}
                  <p className="judson-regular">
                    {" "}
                    Throughout the 6 weeks of working at El Puente, youth
                    employees have worked on canvassing to local residents,
                    creating google surveys to gather information, designing
                    posters, and learning how to formally interview people.
                    Overall, El Puente’s goal is to inspire and educate our
                    community on issues that effect not only Williamsburg, but
                    New York City as a whole. Throughout this internship, we
                    have done research on the harmful effects of the BQE, and
                    truck routes. We have had the privilege of hearing residents
                    stories and opinions on the impact of these services.{" "}
                  </p>
                </Col>
              </Row>
              <Row>
                <Col className="d-flex align-items-center justify-content-center">
                  {" "}
                  <Image fluid src={art}></Image>
                </Col>
                <Col className="d-flex align-items-center justify-content-center">
                  <Image fluid src={microphone}></Image>
                </Col>
                <Col className="d-flex align-items-center justify-content-center">
                  <Image fluid src={water}></Image>
                </Col>
              </Row>
              <Row className="quando-regular text-center">
                {" "}
                <h1>About us</h1>
              </Row>
              <Row>
                <Col>
                  <Image fluid src={circleart} className="w-50"></Image>
                </Col>
                <Col>
                  {" "}
                  <p>
                    Gravida phasellus vulputate lobortis efficitur tempus lectus
                    potenti. Vestibulum habitasse purus duis odio at
                    pellentesque lobortis. Ac tempor mattis consequat; cras
                    ultrices odio. Laoreet dictum facilisis tristique elementum
                    eros suscipit vivamus. Iaculis nisi elit massa facilisi
                    pellentesque. Efficitur pulvinar iaculis potenti vivamus;
                    morbi aliquet massa venenatis. Suscipit facilisis litora,
                    nisi montes cursus aenean. Semper convallis parturient
                    lobortis; convallis et aliquet. Elementum parturient blandit
                    porttitor magnis amet. Torquent pharetra a adipiscing
                    pharetra bibendum.P
                  </p>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
        <Row>
          <Col>
            <Footer></Footer>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
