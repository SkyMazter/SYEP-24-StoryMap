import "../styles/StoryMap.css";
import Button from "react-bootstrap/Button";
import Figure from "react-bootstrap/Figure";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import NavBar from "../components/NavBar.jsx";
import Box from "../assets/square-xxl.png";
import EP from "../assets/ITH3csmT_400x400.jpg";

const Soundscapes = () => {
    return (
        <div>
            <NavBar />
            <p class="text-center">
        <h1
          className="judson-regular"
          style={{ backgroundColor: "#5CAEAF", color: "white" }}
        >
          Southside Soundscapes
        </h1>{" "}
      </p>
      <Container className="p-3">
        <Row>
          <Col className="py-3"></Col>
        </Row>
        <Row>
          <Col className="py-3" xs={12} md={4}>
            <Figure>
              <Figure.Image
                width={500}
                height={100}
                alt="171x180"
                src={EP}
                fluid
              />
            </Figure>
          </Col>
          <Col className="py-3" xs={12} md={8}>
            {" "}
            <p className="judson-regular">
              {" "}
              The Brooklyn-Queens Expressway 
            </p>
          </Col>
        </Row>
      </Container>
            <Footer />
        </div>
    )
}

export default Soundscapes