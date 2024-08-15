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

import Title from "./assets/TITLE.png";

import Group from "./assets/groupPic.png";

import Footer from "./components/Footer.jsx";
import NavBar from "./components/NavBar.jsx";

function App() {
  return (
    <div>
      <Container fluid style={{ backgroundColor: "#265F7E" }}>
        <Row>
          {/* <Col md={2} className="p-0">
            <Image fluid src={bridge} className="w-100 h-100"></Image>
          </Col> */}
          <Col xs={12} className="p-0">
            <Container fluid style={{ backgroundColor: "#265F7E" }}>
              {" "}
              <Row>
                {" "}
                <Col xs={12} className="p-0">
                  <NavBar></NavBar>
                </Col>
              </Row>
              <Row>
                {" "}
                <Col xs={12} className="p-0">
                  <Image fluid src={Title}></Image>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="judson-regular p-3" style={{ color: "white" }}>
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
                  <p className="judson-regular p-3" style={{ color: "white" }}>
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
              {/* <Row>
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
              </Row> */}
              <Row
                className="quando-regular text-center"
                style={{ color: "white" }}
              >
                {" "}
                <h1>About us</h1>
              </Row>
              <Row>
                <Col xs={12} md={4}>
                  <Image fluid src={Group} className="w-100 p-2"></Image>
                </Col>
                <Col
                  className="judson-regular text-center justify-content-center p-2 "
                  style={{ color: "white" }}
                  xs={12}
                  md={8}
                >
                  {" "}
                  <Container fluid>
                    <Row>
                      <Col>
                        <h3 className="quando-regular text-start">
                          Jarlene ~{" "}
                        </h3>
                        <p>
                          <strong>Hey!</strong> I’m Jarlene, I’m 17 years old,
                          and I am a youth organizer as well as a digital
                          steward here at El Puente. This summer we’ve done a
                          lot of things for the community and honestly some
                          things for our own knowledge. We did community
                          outreaching (interviews), workshops, art projects,
                          environmental justice tours, protests and more. My
                          summer at El Puente has been very educational and eye
                          opening. I’m happy to have been a part of an amazing
                          team doing amazing things. We’ve been working hard
                          this summer to raise awareness about the BQE, the
                          BQGreen project and other environmental things going
                          on in the neighborhood of Los Sures. I’ve never really
                          done stuff like this before but I’ve gained a lot of
                          new skills, knowledge, and traits from this
                          experience. This website that my team and I created
                          over the summer showcases a lot of the projects we’ve
                          been working on at El Puente.
                        </p>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <h3 className=" quando-regular text-start">McKayla ~</h3>
                        <p>
                          <strong>My name is</strong> Mckayla, I’m 18 and this
                          summer I worked at El Puente as a group youth
                          organizer where I learned about community issues
                          within New York City, outreach, art projects,
                          workshops, side projects and then branched off into
                          coding. My experience this summer was extremely
                          interesting, educational, informative where I learned
                          about lots of information beyond my own community and
                          learned skills I can use in my everyday life alongside
                          a supportive community. I will forever be grateful for
                          this new experience, the people and friends I made
                          within these weeks when working with the El Puente
                          community here at Southside Williamsburg.
                        </p>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <h3 className="quando-regular text-start">Z ~</h3>
                        <p>
                          <strong>Yello!</strong> I’m Z, a seventeen year-old,
                          transfemme college freshman going in for Game Design
                          and Development, SYEP Youth Organizer and 2-year
                          Digital Steward. This summer has been quite the doozy;
                          meeting several people, holding a few workshops and
                          even making a website whilst working at El Puente once
                          again. Granted, this is the second one I’ve helped
                          make for EP but, it was fun nonetheless. Working here
                          again is something I don’t regret, despite how early
                          I’ve got to wake up to get here on time. Regardless, I
                          hope you enjoy the site, we put a lot of effort into
                          it and we love it, even with all the last minute jank
                          we had to scrounge through. I can’t think of many
                          other ways I would have liked to spend my summer.
                        </p>
                      </Col>
                    </Row>
                  </Container>
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
