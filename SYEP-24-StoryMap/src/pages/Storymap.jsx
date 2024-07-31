import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Figure from 'react-bootstrap/Figure';
import Box from '../assets/placeholder.png'
import Carousel from 'react-bootstrap/Carousel';
import CarouselCaption from "react-bootstrap/esm/CarouselCaption";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Highway from "../assets/highwayimage.png";
import Polarbear from "../assets/Polarbear.png";
import smoke from "../assets/smoke.png";

const Storymap = () => {
  return (
    <div>
      <Link to={"/"}>Go Home</Link>
      <h1 className="quando-regular">Reviving The Brooklyn-Queens Expressway</h1 >

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
             throughout these communities. These neighborhoods live everyday with the costs and risks of this legacy infrastructure
              through poor air quality, divided communities, traffic violence, visual blight, and noise pollution – 
              costs which depress economic and social opportunities and disproportionately fall on environmental justice 
              communities. The BQE represents the paradox of Moses’ legacy. 
              The roads, parks, bridges, and housing he constructed that reshaped New York City and Long Island to 
              serve the public only hurt the public. These constructions resulted in the displacement of thousands of families, destruction of tight-knit 
              neighborhoods, and overall were built at the expense of innumerable people and communities of color. 
              The BQE is no exception. Today, as the aging highway crumbles, New York City needs to decide if there’s 
              a better way forward. At El Puente we make it our everyday goal to do what we can to support
              the efforts being made to bring environmental justice to these communities. One of these efforts being the BQGreen project.
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
              The BQGreen project is one of the many movements whose goal is 
              to restore health, peace, and safety back into our communities. The BQGreen’s 
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

      <Container className="climate-change" fluid>
        <Row>
          <Col
            className="py-3 "
            style={{ backgroundColor: "#00787A", color: "white" }}
            xs={12}
            md={4}
          >
            <div className="d-flex w-100 justify-content-center pb-3" >
              <Image fluid src={Polarbear}></Image>
            </div>
            <h1 className="quando-regular">Climate Change 
          </h1 >
            <p className="judson-regular">
              New York has seen the hottest summer on record this year. Hot
              Summers are said to become the norm due to climate change. A
              Project done by the Mayor's office for Climate and environmental
              Justice says that by 2050 New York will see at least a month's
              worth of days over 90 degrees. The rise in heat causes many health
              risks such as: cramps, heat exhaustion, and heat stroke are said
              to increase with the rise of temperatures. 
            </p>
          </Col>
          <Col
            className="py-3"
            style={{ backgroundColor: "#003D34", color: "white" }}
            xs={12}
            md={4}
          >
            <h1 className="quando-regular">Williamsburg & Climate Change</h1>
            <p className="judson-regular">
              As the rise of climate change continues, so do the rising
              temperatures. New York City has seen an all time high of heat in
              the month of July, and this is not going away. As we continue to
              unjustly take advantage of our resources, we will continue to
              experience this horrific weather. The rise in temperature leads to
              a rise in heat related injuries, resulting in anything from a mild
              headache to a heatstroke. In South Williamsburg, people are even
              more susceptible to these injuries due to the lack of green spaces
              and shade in the neighborhood. Heat related deaths are at an all
              time high around the world, and with the large amount of heat
              related injuries, our emergency centers are overflowing with those
              in need of help. Williamsburg, which has a large elderly
              population is also at risk to the rise in climate change, as
              elderly people are at high risk of having these injuries. 
            </p>
            <div className="d-flex w-100 justify-content-center">
            <Image fluid src={Highway}></Image>
            </div>
          </Col>
          <Col
            className="py-3"
            style={{ backgroundColor: "#5CAEAF", color: "white" }}
            xs={12}
            md={4}
          >
            <h1 className="quando-regular">BQE & Climate Change </h1>
            <p className="judson-regular">
              The BQE causes an influx of car pollution into the atmosphere,
              which is in direct relation to climate change. The BQE is linked
              to high rates of asthma due to the air pollution it causes.
              According to World Economic Forum “Cities are full of structures
              and materials that absorb heat and then radiate it back into the
              urban environment - like roads, buildings, tarmac, and concrete.
              Human activities such as driving and operating machinery also add
              to the heat generated in cities.” The BQE has a direct link to the
              worsening weather patterns we see within this city.
            </p>
            <div className="d-flex w-100 justify-content-center">
            <Image
              style={{ height: 400, width: 300, borderRadius: "85%" }}
              className="py-3"
              fluid
              src={smoke}
            ></Image>
            </div>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
};

export default Storymap