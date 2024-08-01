import "../styles/StoryMap.css";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Highway from "../assets/highwayimage.png";
import Polarbear from "../assets/Polarbear.png";
import smoke from "../assets/smoke.png";
import NavBar from "../components/NavBar.jsx";
import MTALogo from "../assets/mta-bus-logo.png";
import WBT from "../assets/wbt.jpg";

const Storymap = () => {
  return (
    <div>
      <NavBar />

      <Container className="climate-change" fluid>
        <Row>
          <Col
            className="py-3 "
            style={{ backgroundColor: "#00787A", color: "white" }}
            xs={12}
            md={4}
          >
            <div className="d-flex w-100 justify-content-center pb-3">
              <Image fluid src={Polarbear}></Image>
            </div>
            <h1 className="quando-regular">Climate Change</h1>
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
      <div className="MTASucks">
        <h3 id="gone">a</h3>
        <h1 id="yes" className="justify-content-center d-flex quando-regular">
          Transit and it's... quirks
        </h1>
        <br></br>
        <Container>
          <Row>
            <Col>
              <div className="backdrop">
                <p className="justify-content-center d-flex judson-regular">
                  The Metropolitan Tranist Authority, other wise known as the
                  MTA, is inconsistent, at best. With half working busses, train
                  routes that get thrown out the window at the most inconvinent
                  of times and a ferry that I forgot even existed, it's one of
                  the worst functioning systems of transport in NYC. But, it is
                  what most people NY rely on for everyday tasks, so the fact
                  that it is even vaugely functional is a godsend. However,
                  "vaugely functional" is barely good enough and places
                  predominantly inhabitied by people of color seem to get the
                  shortest of the already miniscule sticks from our beloved MTA.
                  <br></br>
                  Los Sures, Williamsburg happens to be a part of inarguably
                  shafted locations, housing the reason why NYC is the most
                  congested city in the world, the BQE, an 11.7 mile long
                  roadway that takes any type of wheeled vehicle, including
                  busses. And with the Williamsburg Bus Terminal, the last stop
                  for 7 separate busses, sandwiched between an entrance and exit
                  of the BQE, hold-ups are bound to happen.
                  <br></br>
                  "So, the busses are scuffed, but what about the trains? They
                  can't be that bad." one might think, wishfully so. And you'd
                  be right... kinda. It isn't the worst offender of trains (that
                  title is still held by the C train), but it isn't a saint
                  either. I calculated the average wait time of the J and M
                  trains from Marcy Avenue during the times they gain the most
                  traction; rush hour. Not the movie, the times between 8-9 am
                  and 3-7 pm. The worst offender between the two is the M, with
                  5 &#189; minutes across 10 trains in the morning and 9 minutes
                  across 30 trains in the in the afternoon/evening. The real
                  kicker with this one is the PM's rush hour time spread. This
                  is the time where people wanna go home after work and school
                  and having to wait 9 minutes at best case average, since the J
                  and M stop at the same station track and can therefore cause
                  delays for each other, it's awful. Even though the M is the
                  true evil, that doesn't mean the J is much better: about 5
                  minutes across 12 trains in the morning and 8 minutes across
                  29 trains in the after-evening. See, not much better.
                  <br></br>
                  Bottom line is, MTA hates POC. That was a joke. Transit sucks
                  everywhere in NYC. It's a managed(?) system that works
                  sometimes but we use it anyways. It's part of being a New
                  Yorker, we're used to our messy, $2.90 (I still can't believe
                  it's $2.90) fared form of transport that gets us almost
                  everywhere in NYC. Almost. RIP the people in Staten Island. We
                  still want it fixed, though.Don't take this as me saying it's
                  fine, it really isn't but, I'd be remiss to say that I, along
                  with many other New Yorkers haven't grown complaisant. Just
                  because we're used to it, doesn't mean we like it. The fact
                  that I had to wait and hour and 20 minutes for the B39, a bus
                  that goes 3 whole stops in a ride that took a total of 5
                  minutes and I could have walked in like 30 minutes if the Maps
                  app didn't consistantly lure me into a false sense of
                  security, is a testiment to my disdain for the MTA. Fricken
                  hate the B39.
                </p>
              </div>
            </Col>
            <Col>
              <Image className="MTATime" src={MTALogo}></Image>
              <Image className="MTATime" src={WBT}></Image>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default Storymap;
