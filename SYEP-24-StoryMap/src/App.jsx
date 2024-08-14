import "./App.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import bridge from "./assets/bridge.png";
import art from "./assets/art.png";
import water from "./assets/water.png";
import microphone from "./assets/microphone.png";
import circleart from "./assets/circleart.png";

import img from "./assets/placeholder.png";

import Footer from "./components/Footer.jsx";
import NavBar from "./components/NavBar.jsx";

function App() {
  return (
    <div>
      <Container fluid style={{ backgroundColor: "#265F7E" }}>
        <Row>
          <Col md={2} className="p-0">
            <Image fluid src={bridge} className="w-100 h-100"></Image>
          </Col>
          <Col md={10} className="p-0">
            <Container fluid style={{ backgroundColor: "#265F7E" }}>
              {" "}
              <Row>
                {" "}
                <Col xs={12} className="p-0">
                  <NavBar></NavBar>
                </Col>
              </Row>
              <Row>
                <Col>
                  {" "}
                  <h1
                    className="quando-regular text-center"
                    style={{ color: "white" }}
                  >
                    SouthSide Story Map
                  </h1>
                  <p className="judson-regular" style={{ color: "white" }}>
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
                  <p className="judson-regular" style={{ color: "white" }}>
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
                  <Image fluid src={art} className="w-100 h-100"></Image>
                </Col>
                <Col className="d-flex align-items-center justify-content-center">
                  <Image fluid src={microphone}></Image>
                </Col>
                <Col className="d-flex align-items-center justify-content-center">
                  <Image fluid src={water} className="w-100 h-100"></Image>
                </Col>
              </Row>
              <Row
                className="quando-regular text-center"
                style={{ color: "white" }}
              >
                {" "}
                <h1>About us</h1>
              </Row>
              <Row>
                <Col xs={12} md={4}>
                  <Image fluid src={circleart} className="w-75 "></Image>
                </Col>
                <Col
                  className="judson-regular text-center justify-content-center p-2 "
                  style={{ color: "white" }}
                  xs={12}
                  md={8}
                >
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
                    pharetra bibendum.
                  </p>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
        <Row>
          <Col className="p-0">
            <Footer></Footer>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
