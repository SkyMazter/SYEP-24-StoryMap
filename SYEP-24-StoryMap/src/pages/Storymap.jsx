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
import Highway from "../assets/highwayimage.png";
import Polarbear from "../assets/Polarbear.png";
import smoke from "../assets/smoke.png";
import airscale from "../assets/air scale.webp";
import NavBar from "../components/NavBar.jsx";
import MTALogo from "../assets/mta-bus-logo.png";
import WBT from "../assets/wbt.jpg";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { Marker } from "react-leaflet";
import { Popup } from "react-leaflet";
import {Circle} from "react-leaflet"
import BQGreenpic from "../assets/BQ-Green-pic-4.jpg";
import BQEMap from "../assets/BQE Map-new-300pix.png.webp";
import BQEWill from "../assets/IMG_7567.jpeg.webp";
import Highway2 from "../assets/GettyImages_97272257.jpg";
import Layers from "../assets/bqe-brooklyn-heights-expressway-promenade-062022-sdevries-5.jpg.webp";

const Storymap = () => {
  return (
    <div>
      <NavBar />
      <p className="justify-content-center d-flex"></p>
      <h3
        className="quando-regular"
        style={{
          backgroundColor: "#d4e4fe",
          color: "black",
          textAlign: "center",
        }}
      >
        Air Quality
      </h3>
      <p className="my-4"></p>
      <Container fluid style={{ backgroundColor: "#d4e4fe", color: "black" }}>
        <h5 className="quando-regular">
          {" "}
          What is Air Quality? Who does it affect?
        </h5>
        <p className="judson-regular">
          Air quality is the degree to which the air is suitable and clean for
          humans, animals and the environment. Air that is free from toxic and
          harmful substances. Air quality affects everyone no matter how far or
          close you are near a pollution hotspot. Some groups are more sensitive
          to Air Quality such as Older adults, children and infants, people who
          spend lots of time near busy roadways and people with pre-existing
          conditions.{" "}
        </p>
      </Container>
      <Col>
        <Row>
          <p className="my-2"></p>
          <Image src={airscale} id="airscale"></Image>
          <div className="col">
            <p className="my-3"></p>
            <h5 className="quando-regular" style={{ color: "black" }}>
              Why is Air Quality Important?
            </h5>
            <p className="judson-regular" style={{ color: "black" }}>
              Humans and the environment need air and breathe a lot of it,
              people who spend time near busy roadways, and breathing in such
              harsh conditions of air will only lead to health problems and a
              poor environment. Harmful air quality causes certain symptoms such
              as irritation to the eyes, nose, throat and even shortness of
              breath. The more you are exposed to such harsh environments the
              more health problems you can or will possibly face in your future.
              Poor air quality can slowly deteriorate your physical and mental
              health if exposed constantly to it.
            </p>
            <h5 className="quando-regular" style={{ color: "black" }}>
              Air Quality in Williamsburg
            </h5>
            <p className="judson-regular" style={{ color: "black" }}>
              Williamsburg, NY Air Quality forecast has been extremely poor and
              has a consistent air quality of around the 60s which is moderate
              for breathing and is significantly lower than good air which is
              anything above 50. Currently the community of Williamsburg has
              been taking in decent levels of nitrogen dioxide which then harms
              them and increases issues such as respiratory problems and more.
              People of williamsburg are most likely taking in as much nitrogen
              dioxide than oxygen. Sensitive groups should also reduce outdoor
              exercise, wearing a mask, running air purifiers and closing
              windows.
            </p>
            <div className="col"></div>
          </div>

          <Row>
            <Col>
              <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      How can we improve Air Quality?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    class="accordion-collapse collapse show"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      Reduce contribution (Manage waste, move mindfully,
                      conserve energy). Minimize your exposure (Monitor air,
                      avoiding heavy traffic, time outdoor activity)
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Accordion Item #2
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      Air quality scale Good 0-50 Moderate 50-100 Unhealthy
                      101-150
                    </div>
                  </div>
                </div>
               </div>
            </Col>
          </Row>
        </Row>
      </Col>
      <p className="my-3"></p>
      <Container
        className="Air Quality and the BQE"
        fluid
        style={{ backgroundColor: "#d4e4fe", color: "black" }}
      >
        <Col>
          <Row>
            <div class="container text-center">
              <div class="row">
                <div class="col">
                  <p className="my-3"></p>
                  <h5 className="quando-regular">Air Quality and the BQE</h5>
                  <p className="judson-regular">
                    The BQE is a major point that significantly contributes to
                    Air quality within the air and the neighborhood. The large
                    amounts of cars and trucks set off toxic fumes and harsh
                    conditions and such are responsible for severe respiratory
                    issues. This air is not suitable for humans to breathe and
                    could easily harm your health. Williamsburg is a major
                    neighborhood that demonstrates how harmful the BQE is to air
                    quality due to small spaces and tons of car and truck
                    activity.{" "}
                  </p>
                </div>
                <div class="col">
                  <p className="my-3"></p>

                  <MapContainer
                    center={[40.71096, -73.95952]}
                    zoom={13}
                    scrollWheelZoom={false}
                    id="map"
                  >
                    <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[40.71139, -73.95512]}>
                      <Popup>
                        Brooklyn-Queens Expressway <br />
                      </Popup>
                    </Marker>
                    <Circle center={[40.71139, -73.95512]} radius={200} />
                  </MapContainer>
                </div>
                <div class="col">
                  <p className="my-4"></p>
                  <h5 className="quando-regular">Air Quality Facts</h5>
                  <table class="table" fluid>
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="judson-regular"
                          style={{ color: "black" }}
                        >
                          {" "}
                          - Less than 1% of global land area has safe pollution
                          levels
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th
                          scope="row"
                          className="judson-regular"
                          style={{ color: "black" }}
                        >
                          {" "}
                          - At least 1 in 10 people die from air
                          pollution-related reasons
                        </th>
                      </tr>
                      <tr>
                        <th
                          scope="row"
                          className="judson-regular"
                          style={{ color: "black" }}
                        >
                          {" "}
                          - Air pollution is a great threat to life expectancy
                          than smoking, HIV or war
                        </th>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </Row>
        </Col>
      </Container>
      <p class="text-center">
        <h1
          className="quando-regular"
          style={{ backgroundColor: "#5CAEAF", color: "white" }}
        >
          Reviving The BQE
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
                src={BQEMap}
                fluid
              />
              <Figure.Caption className="judson-regular">
                Route of The BQE
              </Figure.Caption>
              <Button variant="link">
                {" "}
                <Link to={"https://bqevision.com/about/background"}>More</Link>
              </Button>{" "}
            </Figure>
          </Col>
          <Col className="py-3" xs={12} md={8}>
            {" "}
            <p className="judson-regular">
              {" "}
              The Brooklyn-Queens Expressway is an 11.7 mile long expressway,
              extending from the Brooklyn-Battery Tunnel to the Grand Central
              Parkway in Queens. Designed and planned by Robert Moses, the
              construction of the BQE lasted 27 years, beginning in 1937 and
              ending in 1964. Since then, the BQE has shaped New York City
              tremendously. With approximately 130,000 vehicles using the BQE
              daily,it’s evident that the passageway has become a staple in
              thousands of people’s daily lives. Whilst making people’s daily
              commutes more efficient, life for those beside the BQE hasn’t been
              made as easy. Air quality levels and city temperature’s double,
              the loud & irritable noises from the highway boom throughout the
              streets, intersections and roadways become harder to cross. Year
              after year the communities that line the BQE become more
              dangerous, forcing people to suffer more and more. The BQE,
              overall, has become a huge hazard throughout these communities.
              These neighborhoods live everyday with the costs and risks of this
              legacy infrastructure through poor air quality, divided
              communities, traffic violence, visual blight, and noise pollution
              – costs which depress economic and social opportunities and
              disproportionately fall on environmental justice communities. The
              BQE represents the paradox of Moses’ legacy. The roads, parks,
              bridges, and housing he constructed that reshaped New York City
              and Long Island to serve the public only hurt the public. These
              constructions resulted in the displacement of thousands of
              families, destruction of tight-knit neighborhoods, and overall
              were built at the expense of innumerable people and communities of
              color. The BQE is no exception. Today, as the aging highway
              crumbles, New York City needs to decide if there’s a better way
              forward. At El Puente we make it our everyday goal to do what we
              can to support the efforts being made to bring environmental
              justice to these communities. One of these efforts being the
              BQGreen project.
            </p>
          </Col>
        </Row>
      </Container>

      <Carousel>
        <Carousel.Item>
          <div className=" d-flex justify-content-center align-items-center carousellImage">
            <Image fluid src={BQEWill}></Image>
          </div>
          <Carousel.Caption>
            <h4 className="judson-regular">Under the BQE</h4>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <div className=" d-flex justify-content-center align-items-center carousellImage">
            <Image fluid src={Layers}></Image>
          </div>
          <Carousel.Caption>
            <h4 className="judson-regular">Layers of the BQE</h4>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <div className=" d-flex justify-content-center align-items-center carousellImage">
            <Image fluid src={Highway2}></Image>
          </div>
          <Carousel.Caption>
            <h4 className="judson-regular">Traffic on the BQE</h4>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div>
        <Container className="p-3">
          <Row>
            <Col></Col>
          </Row>
          <Row>
            <Col xs={12} md={8}>
              {" "}
              <p className="judson-regular">
                {" "}
                The BQGreen project is one of the many projects whose goal is to
                restore health, peace, and safety back into our communities. The
                project's plan is to cap a section of the BQE in Williamsburg
                and construct several parks. This plan will help to increase the
                amount of green & open community spaces in the community, which
                will help the organization work towards their goals of
                delivering environmental justice to the community. The project
                will help promote improved health for current and future
                generations thanks to the trees and plants that will help absorb
                freeway noise and dirty air, and ease the urban heat island
                effect. It's a high profile idea that would make a significant
                difference citywide. Even more, the project is a great example
                of what can be achieved when local communities, city, state and
                federal governments and private companies work together toward a
                more equitable and sustainable future. Deputy Borough President
                Diana Reyna is the project’s leading public sponsor and its
                original champion. Other leading advocates of BQGreen include
                local Council Member Antonio Reynoso, Council Member Mark
                Levine, chair of the City Council’s Committee on Parks and
                Recreation and Susannah Drake, the project’s architect.
              </p>
            </Col>
            <Col className="py-3" xs={12} md={4}>
              <Figure>
                <Figure.Image
                  width={500}
                  height={100}
                  alt="171x180"
                  src={BQGreenpic}
                  fluid
                />
                <Figure.Caption className="judson-regular">
                  The BQGreen Project
                </Figure.Caption>
                <Button variant="link">
                  {" "}
                  <Link to={"https://bqgreen.org/en/the-park/"}>More</Link>
                </Button>{" "}
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
