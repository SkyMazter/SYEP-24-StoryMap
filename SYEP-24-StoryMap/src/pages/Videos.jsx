import {
  Player,
  ControlBar,
  ReplayControl,
  ForwardControl,
  CurrentTimeDisplay,
  TimeDivider,
  PlaybackRateMenuButton,
  VolumeMenuButton,
} from "video-react";
import BusDepot from "../assets/videos/BusDepot-2.mp4";
import Animation from "../assets/videos/copy_086AF997-3B53-4724-A72D-C37716577953.mp4";
import Park from "../assets/videos/PSA.mp4";
import { useRef } from "react";
import NavBar from "../components/NavBar";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Footer from "../components/Footer";


const Videos = () => {
  const inputRef = useRef(null);

  return (
    <div>
      <NavBar></NavBar>
      <Container fluid>
        <Row>
          <Col className="text-center">
            <h1>Bus Depot PSA</h1>
          </Col>
        </Row>
      </Container>
      <Player playsInline ref={inputRef}>
        <source src={BusDepot} />
        <ControlBar autoHide={false} />
      </Player>
      <Container fluid>
        <Row>
          <Col className="text-center">
            <h1>Garden Espiritu Tierra</h1>
          </Col>
        </Row>
      </Container>
      <Player playsInline ref={inputRef}>
        <source src={Animation} />
        <ControlBar autoHide={false} />
      </Player>
      <Container fluid>
        <Row>
          <Col className="text-center">
            <h1>Marcy Green Park</h1>
          </Col>
        </Row>
      </Container>
      <Player playsInline ref={inputRef}>
        <source src={Park} />
        <ControlBar autoHide={false} />
      </Player>
      <Footer></Footer>
    </div>
  );
};

export default Videos;
