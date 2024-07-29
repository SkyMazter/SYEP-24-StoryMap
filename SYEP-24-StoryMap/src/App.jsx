import "./App.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Figure from "react-bootstrap/Figure";
import Image from "react-bootstrap/Image";

import { Link } from "react-router-dom";
import img from "./assets/placeholder.png";

function App() {
  return (
    <div>
      <Container className="p-3">
        <Row>
          <Col className="justify-content-center d-flex">
            <h3>Southside StoryMap</h3>
          </Col>
        </Row>
        <Row>
          <Col className="justify-content-center d-flex" xs={3}>
            <Link>Home</Link>
          </Col>
          <Col className="justify-content-center d-flex" xs={3}>
            <Link>StoryMap</Link>
          </Col>
          <Col className="justify-content-center d-flex" xs={3}>
            <Link>SoundScapes</Link>
          </Col>
          <Col className="justify-content-center d-flex" xs={3}>
            <Link>Muralistas</Link>
          </Col>
        </Row>
      </Container>
      <div
        className="bg-primary w-100 justify-content-center d-flex align-items-center"
        style={{
          position: "relative",
        }}
      >
        <h3
          style={{
            position: "absolute",
            zIndex: 3,
          }}
        >
          {" "}
          Subheader
        </h3>
        <Image
          src={img}
          style={{
            height: "200px",
            width: "100%",
            position: "relative",
            zIndex: 1,
          }}
        ></Image>
      </div>
      <Container className="p-3">
        <Row>
          <Col>
            <h4>Title</h4>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4}>
            <Figure>
              <Figure.Image
                width={500}
                height={100}
                alt="171x180"
                src={img}
                fluid
              />
              <Figure.Caption>syep cohort 2024</Figure.Caption>
            </Figure>
          </Col>
          <Col xs={12} md={8}>
            {" "}
            <p>
              {" "}
              Lorem ipsum odor amet, consectetuer adipiscing elit. Dignissim
              pulvinar venenatis habitasse per tellus sociosqu eros rhoncus
              adipiscing. Elit dignissim imperdiet ac massa facilisi quam
              sollicitudin conubia. Cubilia efficitur litora magna amet; magnis
              cras integer. Est eget commodo feugiat quisque facilisi dis lorem
              proin. Tellus sagittis lobortis risus fusce ridiculus penatibus
              volutpat integer. Lorem ipsum odor amet, consectetuer adipiscing
              elit. Dignissim pulvinar venenatis habitasse per tellus sociosqu
              eros rhoncus adipiscing. Elit dignissim imperdiet ac massa
              facilisi quam sollicitudin conubia. Cubilia efficitur litora magna
              amet; magnis cras integer. Est eget commodo feugiat quisque
              facilisi dis lorem proin. Tellus sagittis lobortis risus fusce
              ridiculus penatibus volutpat integer.
            </p>{" "}
            <p>
              {" "}
              Lorem ipsum odor amet, consectetuer adipiscing elit. Dignissim
              pulvinar venenatis habitasse per tellus sociosqu eros rhoncus
              adipiscing. Elit dignissim imperdiet ac massa facilisi quam
              sollicitudin conubia. Cubilia efficitur litora magna amet; magnis
              cras integer. Est eget commodo feugiat quisque facilisi dis lorem
              proin. Tellus sagittis lobortis risus fusce ridiculus penatibus
              volutpat integer. Lorem ipsum odor amet, consectetuer adipiscing
              elit. Dignissim pulvinar venenatis habitasse per tellus sociosqu
              eros rhoncus adipiscing. Elit dignissim imperdiet ac massa
              facilisi quam sollicitudin conubia. Cubilia efficitur litora magna
              amet; magnis cras integer. Est eget commodo feugiat quisque
              facilisi dis lorem proin. Tellus sagittis lobortis risus fusce
              ridiculus penatibus volutpat integer.
            </p>{" "}
          </Col>
        </Row>
      </Container>

      <Container className="p-3">
        <Row>
          <Col xs={12} sm={4} md={{ order: "last" }}>
            <Figure>
              <Figure.Image
                width={500}
                height={100}
                alt="171x180"
                src={img}
                fluid
              />
              <Figure.Caption>syep cohort 2024</Figure.Caption>
            </Figure>
          </Col>
          <Col xs={12} md={8}>
            {" "}
            <p>
              {" "}
              Lorem ipsum odor amet, consectetuer adipiscing elit. Dignissim
              pulvinar venenatis habitasse per tellus sociosqu eros rhoncus
              adipiscing. Elit dignissim imperdiet ac massa facilisi quam
              sollicitudin conubia. Cubilia efficitur litora magna amet; magnis
              cras integer. Est eget commodo feugiat quisque facilisi dis lorem
              proin. Tellus sagittis lobortis risus fusce ridiculus penatibus
              volutpat integer. Lorem ipsum odor amet, consectetuer adipiscing
              elit. Dignissim pulvinar venenatis habitasse per tellus sociosqu
              eros rhoncus adipiscing. Elit dignissim imperdiet ac massa
              facilisi quam sollicitudin conubia. Cubilia efficitur litora magna
              amet; magnis cras integer. Est eget commodo feugiat quisque
              facilisi dis lorem proin. Tellus sagittis lobortis risus fusce
              ridiculus penatibus volutpat integer.
            </p>{" "}
            <p>
              {" "}
              Lorem ipsum odor amet, consectetuer adipiscing elit. Dignissim
              pulvinar venenatis habitasse per tellus sociosqu eros rhoncus
              adipiscing. Elit dignissim imperdiet ac massa facilisi quam
              sollicitudin conubia. Cubilia efficitur litora magna amet; magnis
              cras integer. Est eget commodo feugiat quisque facilisi dis lorem
              proin. Tellus sagittis lobortis risus fusce ridiculus penatibus
              volutpat integer. Lorem ipsum odor amet, consectetuer adipiscing
              elit. Dignissim pulvinar venenatis habitasse per tellus sociosqu
              eros rhoncus adipiscing. Elit dignissim imperdiet ac massa
              facilisi quam sollicitudin conubia. Cubilia efficitur litora magna
              amet; magnis cras integer. Est eget commodo feugiat quisque
              facilisi dis lorem proin. Tellus sagittis lobortis risus fusce
              ridiculus penatibus volutpat integer.
            </p>{" "}
          </Col>
        </Row>
      </Container>


    </div>
  );
}

export default App;
