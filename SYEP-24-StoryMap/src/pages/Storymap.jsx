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
      <Col className="justify-content-center d-flex"><h3>Air Quality</h3> </Col> 
        <Row>
         <Col>
          <p className="my-3">
           <h5>What is Air Quality? Who does it affect?</h5>
            Air quality is the degree to which the air is suitable and clean for
            humans, animals and the environment. Air that is free from toxic and
            harmful substances. Air quality affects everyone no matter how far
            or close you are near a pollution hotspot. Some groups are more sensitive to Air Quality such as Older adults, children and infants, people who spend lots of time near busy roadways and people with pre-existing conditions. </p>
             </Col>
             </Row>

             <div className="row">
             <div className="col">
             </div>
            <div className="col"><h5>Why is Air Quality Important?</h5>Humans and the environment need air and breathe a lot of it, people who spend time near busy roadways,and breathing in such harsh conditions of air will only lead to health problems and a poor environment. Harmful air quality -causes certain symptoms such as irritation to the eyes, nose, throat and even shortness of breath. The more you are exposed to such harsh environments the more health problems you can or will possibly face in your future. Poor air quality can slowly deteriorate your physical and mental health if exposed constantly to it.</div>
           <div className="col">3 of 3</div>
         <Footer />
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

      {/* <Container>
        <Row>
          <Col>
            <h1>Climate Change</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            New York has seen the hottest summer on record this year. Hot
            Summers are said to become the norm due to climate change. A Project
            done by the Mayor's office for Climate and environmental Justice
            says that by 2050 New York will see at least a month's worth of days
            over 90 degrees. The rise in heat causes many health risks such as:
            cramps, heat exhaustion, and heat stroke are said to increase with
            the rise of temperatures.
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>Williamsburg & Climate Change</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            As the rise of climate change continues, so do the rising
            temperatures. New York City has seen an all time high of heat in the
            month of July, and this is not going away. As we continue to
            unjustly take advantage of our resources, we will continue to
            experience this horrific weather. The rise in temperature leads to a
            rise in heat related injuries, resulting in anything from a mild
            headache to a heatstroke. In South Williamsburg, people are even
            more susceptible to these injuries due to the lack of green spaces
            and shade in the neighborhood. Heat related deaths are at an all
            time high around the world, and with the large amount of heat
            related injuries, our emergency centers are overflowing with those
            in need of help. Williamsburg, which has a large elderly population
            is also at risk to the rise in climate change, as elderly people are
            at high risk of having these injuries. 
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>BQE & Climate Change</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            The BQE causes an influx of car pollution into the atmosphere, which
            is in direct relation to climate change. The BQE is linked to high
            rates of asthma due to the air pollution it causes.According to
            World Economic Forum “Cities are full of structures and materials
            that absorb heat and then radiate it back into the urban environment
            - like roads, buildings, tarmac, and concrete. Human activities such
            as driving and operating machinery also add to the heat generated in
            cities.” The BQE has a direct link to the worsening weather patterns
            we see within this city.
          </Col>
        </Row>
      </Container>
  <Image src={Blue}></Image> */}

      <Footer />
    </div>
    );
};

export default Storymap;
