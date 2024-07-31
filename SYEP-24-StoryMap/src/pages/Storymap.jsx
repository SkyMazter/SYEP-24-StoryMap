import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import Box from '../assets/placeholder.png'
import Carousel from 'react-bootstrap/Carousel';
import CarouselCaption from "react-bootstrap/esm/CarouselCaption";

const Storymap = () => {
  return (
    <div>
      <Link to={"/"}>Go Home</Link>
      <h1>Reviving The BQE</h1>

      <Container className="p-3">
        <Row>
          <Col>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4}>
            <Figure>
              <Figure.Image
                width={500}
                height={100}
                alt="171x180"
                src={Box}
                fluid
              />
              <Figure.Caption>Background of The BQE</Figure.Caption>
              <Button variant="outline-success">More</Button>{' '}
            </Figure>
          </Col>
          <Col xs={12} md={8}>
            {" "}
            <p>
              {" "}
              The Brooklyn-Queens Expressway is an 11.7 mile long expressway, extending from the Brooklyn-Battery Tunnel to the 
              Grand Central Parkway in Queens. Designed and planned by Robert Moses, the construction
             of the BQE lasted 27 years, beginning in 1937 and ending in 1964. Since then, the BQE has shaped New York City tremendously.
             With approximately 130,000 vehicles using the BQE daily,it’s evident that the passageway
             has become a staple in thousands of people’s daily lives. Whilst making people’s daily
              commutes more efficient, life for those beside the BQE hasn’t been made as easy.
              Air quality levels and city temperature’s double, 
              the loud & irritable noises from the highway boom throughout the streets, intersections
              and roadways become harder to cross. Year after year the communities that line the BQE become more
              dangerous, forcing people to suffer more and more. The BQE, overall, has become a huge hazard
             throughout these communities. live everyday with the costs and risks of this legacy infrastructure
              through poor air quality, divided communities, traffic violence, visual blight, and noise pollution – 
              costs which depress economic and social opportunities and disproportionately fall on environmental justice 
              communities
            </p>
          </Col>
        </Row>
      </Container>

      <Carousel>
        <Carousel.Item>
          <div className="w-100 d-flex justify-content-center align-items-center">
          <Image fluid src={Box}></Image>
          </div>
        </Carousel.Item>

        <Carousel.Item>
        <div className="w-100 d-flex justify-content-center align-items-center">
          <Image fluid src={Box}></Image>
          </div>
        </Carousel.Item>

        <Carousel.Item>
        <div className="w-100 d-flex justify-content-center align-items-center">
          <Image fluid src={Box}></Image>
          </div>
        </Carousel.Item>

        <Carousel.Caption>
          <h2>The BQE</h2>
        </Carousel.Caption>
      </Carousel>

      <div>
      <Container className="p-3">
        <Row>
          <Col>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={8}>
            {" "}
            <p>
              {" "}
              The BQGreen project/movement, led by Diana Reyna, is one 
              of the many movements whose goal is to restore health, 
              peace, and safety back into our communities. The BQGreen’s 
              plan is to cap a section of the BQE in Williamsburg and 
              construct several parks. This plan will help to increase the 
              amount of green & open community spaces in the community 
              which will help the organization work towards their goals 
              of delivering environmental justice to the city/community.
              Will deliver environmental justice to the neighborhood’s 
              longtime residents. Will promote improved health for current
             and future generations thanks to the trees and plants that
              will help absorb freeway noise and dirty air, and ease the
             urban heat island effect. Is a high profile idea that would
              make a significant difference citywide. It is on par with 
              the High Line in terms of the impact that it will have. The 
              park captures the imagination in a way that the other potential
               park projects do not. Will become a great example of what can 
               be achieved when local communities, city, state and federal 
               governments and private companies work together toward a more 
               equitable and sustainable future. Deputy Borough President 
               Diana Reyna is the project’s leading public sponsor and its 
               original champion. Other leading advocates of BQGreen include 
               local Council Member Antonio Reynoso, Council Member Mark 
               Levine, chair of the City Council’s Committee on Parks and 
               Recreation and Susannah Drake, the project’s architect.
            </p>
          </Col>
          <Col xs={12} md={4}>
            <Figure>
              <Figure.Image
                width={500}
                height={100}
                alt="171x180"
                src={Box}
                fluid
              />
              <Figure.Caption>The BQGreen Project</Figure.Caption>
              <Button variant="outline-success">More</Button>{' '}
            </Figure>
          </Col>
        </Row>
      </Container>
      </div>

      <Footer />
    </div>
  )
}

export default Storymap