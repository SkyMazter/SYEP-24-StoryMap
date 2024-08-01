import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Highway from "../assets/highwayimage.png";
import Polarbear from "../assets/Polarbear.png";
import smoke from "../assets/smoke.png";
import scale from "../assets/scale.jpg";
import airscale from "../assets/air scale.webp";
import airquality from "../assets/air quality.webp";
import worlds from "../assets/worlds.png";
import bqe from "../assets/bqe.webp";
const Storymap = () => {
  return (
    <div>
      <Link to={"/"}>Go Home</Link>
      <p className="justify-content-center d-flex"></p><h3 className="quando-regular"style={{ backgroundColor: "#d4e4fe", color: "black", textAlign:"center" }}>Air Quality</h3>
          <p className="my-4"></p>
          <Container fluid
          style={{ backgroundColor: "#d4e4fe", color: "black" }}
          ><h5 className="quando-regular" > What is Air Quality? Who does it affect?</h5>
           <p className="judson-regular">Air quality is the degree to which the air is suitable and clean for
            humans, animals and the environment. Air that is free from toxic and
            harmful substances. Air quality affects everyone no matter how far
            or close you are near a pollution hotspot. Some groups are more sensitive to Air Quality such as Older adults, children and infants, people who spend lots of time near busy roadways and people with pre-existing conditions. </p>
          </Container>
          <Col>
           <Row>
            <p className="my-2"></p>
             <Image src={airscale} id="airscale"></Image>
              <div className="col">
             <p className="my-3"></p>
            <h5 className="quando-regular"
            style={{color: "black" }} >Why is Air Quality Important?</h5>
           <p className="judson-regular"style={{color: "black" }}>Humans and the environment need air and breathe a lot of it, people who spend time near busy roadways,
            and breathing in such harsh conditions of air will only lead to health problems and a poor environment. Harmful air quality causes certain symptoms such as irritation to the eyes, nose, throat and even shortness of breath. The more you are exposed to such harsh environments the more health problems you can or will possibly face in your future. Poor air quality can slowly deteriorate your physical and mental health if exposed constantly to it.</p>
          <h5 className="quando-regular" style={{color: "black" }} >Air Quality in Williamsburg</h5>
          <p className="judson-regular"style={{color: "black" }} >Williamsburg, NY Air Quality forecast has been extremely poor and has a consistent air quality of around the 60s which is moderate for breathing and is significantly lower than good air which is anything above 50. Currently the community of Williamsburg has been taking in decent levels of nitrogen dioxide which then harms them and increases issues such as respiratory problems and more. People of williamsburg are most likely taking in as much nitrogen dioxide than oxygen. Sensitive groups should also reduce outdoor exercise, wearing a mask, running air purifiers and closing windows.
          </p>
           <div className="col">
            </div>
             </div>  
             </Row> 
             </Col>
             <p className="my-2"></p>
            <Container className="Air Quality and the BQE" fluid
            style={{ backgroundColor: "#d4e4fe", color: "black" }}>
           <Col>
          <Row>
         <div class="container text-center">
          <div class="row">
           <div class="col">
           <p className="my-2"></p>
         <h5 className="quando-regular">Air Quality and the BQE</h5>
        <p className="judson-regular">The BQE is a major point that significantly contributes to Air quality within the air and the neighborhood. The large amounts of cars and trucks set off toxic fumes and harsh conditions and such are responsible for severe respiratory issues. This air is not suitable for humans to breathe and could easily harm your health. Williamsburg is a major neighborhood that demonstrates how harmful the BQE is to air quality due to small spaces and tons of car and truck activity.   </p>
       </div>
      <div class="col">
      <p className="my-3"></p>
      <Image src={bqe} id="bqe"></Image>
    </div>
    <div class="col">
    <p className="my-2"></p>
    <h5 className="quando-regular">Air Quality Facts</h5>
    <table class="table">
  <thead>
    <tr>
      <th scope="col" className="judson-regular" style={{color: "black" }}> - Less than 1% of global land area has safe pollution levels
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" className="judson-regular" style={{color: "black" }}> - At least 1 in 10 people die from air pollution-related reasons
      </th>
    </tr>
    <tr>
      <th scope="row" className="judson-regular" style={{color: "black" }}> - Air pollution is a great threat to life expectancy than smoking, HIV or war
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

export default Storymap;
