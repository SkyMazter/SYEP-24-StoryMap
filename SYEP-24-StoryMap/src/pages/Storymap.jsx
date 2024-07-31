import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Image from "react-bootstrap/Image";

const Storymap = () => {
  return (
    <div>
      <NavBar />
      <br></br>
      <h1 className="justify-content-center d-flex">
        Transit and it's... quirks
      </h1>
      <br></br>
      <Container>
        <Row>
          <Col>
            <p className="justify-content-center d-flex">
              The Metropolitan Tranist Authority, other wise known as the MTA,
              is inconsistent, at best. With half working busses, train routes
              that get thrown out the window at the most inconvinent of times
              and a ferry that I forgot even existed, it's one of the worst
              functioning systems of transport in NYC. But, it is what most
              people NY rely on for everyday tasks, so the fact that it is even
              vaugely functional is a godsend. However, "vaugely functional" is
              barely good enough and places predominantly inhabitied by people
              of color seem to get the shortest of the already miniscule sticks
              from our beloved MTA. 
              <br></br>
              Los Sures, Williamsburg happens to be a part
              of inarguably shafted locations, housing the reason why NYC is the
              most congested city in the world, the BQE, an 11.7 mile long
              roadway that takes any type of wheeled vehicle, including busses.
              And with the Williamsburg Bus Terminal, the last stop for 7
              separate busses, sandwiched between an entrance and exit of the
              BQE, hold-ups are bound to happen.
              <br></br>
              "So, the busses are scuffed,
              but what about the trains? They can't be that bad." one might
              think, wishfully so. And you'd be right... kinda. It isn't the
              worst offender of trains (that title is still held by the C
              train), but it isn't a saint either. I calculated the average wait
              time of the J and M trains from Marcy Avenue during the times they
              gain the most traction; rush hour. Not the movie, the times
              between 8-9 am and 3-7 pm. The worst offender between the two is
              the M, with 5 &#189; minutes across 10 trains in the morning and 9
              minutes across 30 trains in the in the afternoon/evening. The real
              kicker with this one is the PM's rush hour time spread. This is
              the time where people wanna go home after work and school and
              having to wait 9 minutes at best case average, since the J and M
              stop at the same station track and can therefore cause delays for
              each other, it's awful. Even though the M is the true evil, that
              doesn't mean the J is much better: about 5 minutes across 12
              trains in the morning and 8 minutes across 29 trains in the
              after-evening. See, not much better.
            </p>
          </Col>
          <Col>
            <Image src="" />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Storymap;
