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
import { useRef } from "react";
import NavBar from "../components/NavBar";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

const Videos = () => {
  const inputRef = useRef(null);

  return (
    <div>
      <NavBar></NavBar>
      <Container fluid>
        <Row>
          <Col className="text-center">
            {" "}
            <h1>Bus Depot PSA</h1>
          </Col>
        </Row>
      </Container>
      <Player playsInline ref={inputRef}>
        <source src={BusDepot} />
        <ControlBar autoHide={false} />
      </Player>
    </div>
  );
};

export default Videos;
