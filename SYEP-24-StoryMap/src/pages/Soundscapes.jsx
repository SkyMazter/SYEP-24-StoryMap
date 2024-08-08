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
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const Soundscapes = () => {
    return (
        <div>
            <NavBar />
      <Container className="p-3">
        <Row>
          <Col className="py-3" xs={12} md={8}>
            {" "}
            <p class="text-center">
        <h1
          className="judson-regular"
        >
          Southside Soundscapes
        </h1>{" "}
        </p>
            <p class="text-center">
        <h3 className="judson-regular">
          The Voices of the Community/Los Sures
        </h3>{" "}
      </p>
            <p class="text-center" className="judson-regular">
        Southside Soundscapes is a collection of audio recordings, recorded by a group of
         youth organizers at El Puente around the neighborhood of Los Sures. AS youth 
         organizers, a huge part of our job at El Puente is outreaching throughout the 
         community.
      </p>
          </Col>
        </Row>
      </Container>
      
      <CardGroup>
      <Card>
        <Card.Img variant="top" src={Box} />
        <Card.Body>
          <Card.Title>Audio #1</Card.Title>
          <Card.Text>
          This card has supporting text below as a natural lead-in to
          additional content.
          </Card.Text>
          <Button variant="link">Listen</Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">July 19th • 3 minutes</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={Box}/>
        <Card.Body>
          <Card.Title>Audio #2</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
          <Button variant="link">Listen</Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">July 19th • 3 minutes</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={Box} />
        <Card.Body>
          <Card.Title>Audio #3</Card.Title>
          <Card.Text>
          This card has supporting text below as a natural lead-in to
          additional content.
          </Card.Text>
          <Button variant="link">Listen</Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">July 19th • 3 minutes</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    <CardGroup>
      <Card>
        <Card.Img variant="top" src={Box} />
        <Card.Body>
          <Card.Title>Audio #4</Card.Title>
          <Card.Text>
          This card has supporting text below as a natural lead-in to
          additional content.
          </Card.Text>
          <Button variant="link">Listen</Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">July 19th • 3 minutes</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={Box} />
        <Card.Body>
          <Card.Title>Audio #5</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
          <Button variant="link">Listen</Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">July 19th • 3 minutes</small>
        </Card.Footer>
      </Card>
    </CardGroup>
            <Footer />
        </div>
    )
}

export default Soundscapes