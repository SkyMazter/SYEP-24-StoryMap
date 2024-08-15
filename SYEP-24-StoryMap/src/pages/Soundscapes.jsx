import "../styles/StoryMap.css";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import Footer from "../components/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import NavBar from "../components/NavBar.jsx";
import Box from "../assets/square-xxl.png";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Miguel from "../assets/Miguel Hernandez and Gabriele Blazyte_3.jpeg";
import Joseph from "../assets/Joseph Matonis and Branden Henderson_1.jpg";
import Frances from "../assets/Copy of Frances_Britney_4.jpg";

import FrancesAudio from "../assets/audioFiles/Frances Lucerna_ Britney Urbina_Mixed.wav";
import JosephAudio from "../assets/audioFiles/Joseph Matonis and Branden Henderson_Mixed.wav";
import MiguelAudio from "../assets/audioFiles/Miguel Hernandez and Gabriele Blazyte_Mixed.wav";

import Track from "../components/Track.jsx";
import { useState } from "react";

const Soundscapes = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);

  const interviews = [
    {
      id: "i1",
      src: FrancesAudio,
    },
    {
      id: "i2",
      src: JosephAudio,
    },
    {
      id: "i3",
      src: MiguelAudio,
    },
  ];

  return (
    <div>
      <NavBar />
      <Container className="p-3">
        <Row>
          <Col>
            {" "}
            <h1 className="text-center judson-regular">
              Southside Soundscapes
            </h1>{" "}
            <h3 className="text-center judson-regular">
              The Voices of Los Sures
            </h3>{" "}
            <p className="text-center judson-regular">
              Southside Soundscapes is a collection of audio recordings,
              recorded by a group of youth organizers at El Puente in the
              Southside of Williamsburg. As youth organizers, a huge part of our
              job at El Puente is outreaching throughout the community. In 2024,
              we started recording conversations among our community in the
              Southside of Williamsburg. These are our stories of activism,
              transformation, creativity, joy, loss, and love. In this first set
              of interviews, young members of the El Puente team interview
              elders and leaders, who share their stories about growing up in
              the neighborhood, creating organizations, art and social
              movements, and witnessing their communities transform.
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
                  <Track
                    key={interviews[0].id}
                    index={0}
                    src={interviews[0].src}
                    setCurrentSong={setCurrentSong}
                    currentSong={currentSong}
                    isPlaying={isPlaying}
                    setIsPlaying={setIsPlaying}
                  />
                </Card.Body>
                <Card.Footer>
                  <small className="judson-regular">
                    July 19th • 3 minutes
                  </small>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" src={Box} />
                <Card.Body>
                  <Card.Title className="judson-regular">Audio #2</Card.Title>
                  <Card.Text className="judson-regular">
                    This card has supporting text below as a natural lead-in to
                    additional content.{" "}
                  </Card.Text>
                  <Track
                    key={interviews[1].id}
                    index={1}
                    src={interviews[1].src}
                    setCurrentSong={setCurrentSong}
                    currentSong={currentSong}
                    isPlaying={isPlaying}
                    setIsPlaying={setIsPlaying}
                  />
                </Card.Body>
                <Card.Footer>
                  <small className="judson-regular">
                    July 19th • 3 minutes
                  </small>
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
                  <Track
                    key={interviews[2].id}
                    index={2}
                    src={interviews[2].src}
                    setCurrentSong={setCurrentSong}
                    currentSong={currentSong}
                    isPlaying={isPlaying}
                    setIsPlaying={setIsPlaying}
                  />
                </Card.Body>
                <Card.Footer>
                  <small className="judson-regular">
                    July 19th • 3 minutes
                  </small>
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
                  <Button className="text-center" variant="primary">
                    Play
                  </Button>
                </Card.Body>
                <Card.Footer>
                  <small className="judson-regular">
                    July 19th • 3 minutes
                  </small>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" src={Box} />
                <Card.Body>
                  <Card.Title className="judson-regular">Audio #5</Card.Title>
                  <Card.Text className="judson-regular">
                    This card has supporting text below as a natural lead-in to
                    additional content.{" "}
                  </Card.Text>
                  <Button className="text-center" variant="primary">
                    Play
                  </Button>
                </Card.Body>
                <Card.Footer>
                  <small className="judson-regular">
                    July 19th • 3 minutes
                  </small>
                </Card.Footer>
              </Card>
            </CardGroup>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
};

export default Soundscapes;
