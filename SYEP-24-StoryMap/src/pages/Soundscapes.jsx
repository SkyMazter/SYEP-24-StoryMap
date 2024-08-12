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
import Miguel from "../assets/Miguel Hernandez and Gabriele Blazyte_3.jpeg";
import Joseph from "../assets/Joseph Matonis and Branden Henderson_1.jpg";
import Frances from "../assets/Copy of Frances_Britney_4.jpg";

const Soundscapes = () => {
    return (
        <div>
            <NavBar />
      <Container className="p-3">
        <Row>
          <Col>
            {" "}
            <p class="text-center">
        <h1 className="judson-regular">Southside Soundscapes</h1>{" "}
        </p>
            <p class="text-center">
        <h3 className="judson-regular">
          The Voices of Los Sures
        </h3>{" "}
      </p>
            <p class="text-center" className="judson-regular">
        Southside Soundscapes is a collection of audio recordings, recorded by a group of
         youth organizers at El Puente in the Southside of Williamsburg. As youth 
         organizers, a huge part of our job at El Puente is outreaching throughout the 
         community. In 2024, we started recording conversations among our community in 
         the Southside of Williamsburg. These are our stories of activism, transformation,
          creativity, joy, loss, and love. In this first set of interviews, young members 
          of the El Puente team interview elders and leaders, who share their stories about 
          growing up in the neighborhood, creating organizations, art and social movements, 
          and witnessing their communities transform.
      </p>
      <CardGroup className="mx-5">
      <Card>
        <Card.Img variant="top" src={Box} />
        <Card.Body>
          <Card.Title className="judson-regular">Audio #1</Card.Title>
          <Card.Text className="judson-regular">
          This card has supporting text below as a natural lead-in to
          additional content.
          </Card.Text>
          <Button class="text-center" variant="success">Play</Button>
        </Card.Body>
        <Card.Footer>
          <small className="judson-regular">July 19th • 3 minutes</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={Box}/>
        <Card.Body>
          <Card.Title className="judson-regular">Audio #2</Card.Title>
          <Card.Text className="judson-regular">
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
          <Button class="text-center" variant="success">Play</Button>
        </Card.Body>
        <Card.Footer>
          <small className="judson-regular">July 19th • 3 minutes</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={Box} />
        <Card.Body>
          <Card.Title className="judson-regular">Audio #3</Card.Title>
          <Card.Text className="judson-regular">
          This card has supporting text below as a natural lead-in to
          additional content.
          </Card.Text>
          <Button class="text-center" variant="success">Play</Button>
        </Card.Body>
        <Card.Footer>
          <small className="judson-regular">July 19th • 3 minutes</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    </Col>
        </Row>
      </Container>

      <Carousel>
        <Carousel.Item>
          <div className=" d-flex justify-content-center align-items-center carousellImage">
            <Image fluid src={Miguel}></Image>
          </div>
          <Carousel.Caption>
            <h4 className="judson-regular">Behind the Scenes</h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className=" d-flex justify-content-center align-items-center carousellImage">
            <Image fluid src={Joseph}></Image>
          </div>
          <Carousel.Caption>
            <h4 className="judson-regular">Behind the Scenes</h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className=" d-flex justify-content-center align-items-center carousellImage">
            <Image fluid src={Frances}></Image>
          </div>
          <Carousel.Caption>
            <h4 className="judson-regular">Behind the Scenes</h4>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <p class="text-center">
        <h5 className="judson-regular">
          
        </h5>{" "}
      </p>

    <Container className="p-3">
        <Row>
          <Col>
            {" "}
            <CardGroup className="mx-5">
      <Card>
        <Card.Img variant="top" src={Box} />
        <Card.Body>
          <Card.Title className="judson-regular">Audio #4</Card.Title>
          <Card.Text className="judson-regular">
          This card has supporting text below as a natural lead-in to
          additional content.
          </Card.Text>
          <Button class="text-center" variant="success">Play</Button>
        </Card.Body>
        <Card.Footer>
          <small className="judson-regular">July 19th • 3 minutes</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={Box} />
        <Card.Body>
          <Card.Title className="judson-regular">Audio #5</Card.Title>
          <Card.Text className="judson-regular">
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
          <Button class="text-center" variant="success">Play</Button>
        </Card.Body>
        <Card.Footer>
          <small className="judson-regular">July 19th • 3 minutes</small>
        </Card.Footer>
      </Card>
    </CardGroup>
          </Col>
        </Row>
      </Container>

            <Footer />
        </div>
    )
}

export default Soundscapes