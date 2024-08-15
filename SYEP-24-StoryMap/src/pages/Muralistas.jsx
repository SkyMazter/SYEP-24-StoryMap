import NavBar from "../components/NavBar";
import Placeholder from "../assets/placeholder.png";
import airscale from "../assets/air scale.webp";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Placeholder2 from "../assets/blank.png";
import SYEPArt from "../assets/syepart.jpg";
import art1 from "../assets/art 1.jpg";
import art2 from "../assets/art 2.jpg";
import yoseff from "../assets/yosef.jpg";
import sandb from "../assets/shay and brit.jpg";
import art3 from "../assets/art 3.jpg";
import library from "../assets/img_3050.jpg";
import painting from "../assets/denise.jpg";
import ypaint from "../assets/yosefff.jpg";
import yandd from "../assets/yandd.jpg";
import cyano from "../assets/cyano.jpg";
import cyano2 from "../assets/cyano2.jpg";
import posters2 from "../assets/posters2.jpg";
import pinata from "../assets/pinatas.jpg";
const Muralistas = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Carousel style={{ backgroundColor: "#0E5489", color: "white" }}>
        <Carousel.Item>
          {" "}
          <Image fluid className="yandd" src={posters2}></Image>
          <Carousel.Caption>Using the locations from El Puente Green Light District’s Environmental Justice Walk, the art group did “The Walk” activity by Lynda Barry. </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          {" "}
          <Image fluid className="yandd" src={yandd}></Image>
          <Carousel.Caption>Finishing process of the Cyanotype prints drying in the sun</Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          {" "}
          <Image fluid className="yandd" src={cyano}></Image>
          <Carousel.Caption>Cyanotypes that our SYEP art group created</Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container
        className="p-3"
        fluid
        style={{ backgroundColor: "#1770B3", color: "white" }}
      >
        <div class="container text-center">
          <div class="row">
            <div class="col">
              <h5 className="quando-regular">Placemaking Through Art in Los Sures</h5>
            </div>
            <div class="col">
              <h5 className="judson-regular">
                The artists.. Yosef, Denise, Shaylie, and Pierre from El Puente
              </h5>
            </div>
          </div>
        </div>
      </Container>

      <Container
        className="p-2"
        fluid
        style={{ backgroundColor: "#0E5489", color: "white" }}
      >
        <div class="container text-center">
          <div class="row">
            <div class fluid="col">
              <h4 className="quando-regular">Summer Art Gallery</h4>
            </div>
            <p className="my-1"></p>

            <div class="col">
              <Image fluid src={sandb}></Image>
            </div>

            <div class="col">
              <Image fluid src={library}></Image>
            </div>

            <div class="col">
              <Image fluid src={art2}></Image>
            </div>

            <div class="col">
              <Image fluid src={painting}></Image>
            </div>
          </div>
        </div>
        <p className="my-3"></p>
        <center>
          <h4 className="quando-regular">Community Library</h4>
          <p className="my-2"></p>
          <p className="judson-regular">
            The EL PUENTE SYEP summer artists 2024 core created a free community
            library for the community of Los Sures. It is a symbol for
            collaboration with the community and a tool to share resources such
            as books and information. The library was painted, designed and
            inspired by the youth artist group of SYEP youth members,
            incorporating themes promoting reading, environmental awareness and
            unity.
          </p>
        </center>
      </Container>

      <Container className="p-2" fluid style={{ backgroundColor: "#0E5489" }}>
        <div class fluid="container text-center">
          <div class="row">
            <div class="col">
              <Image fluid src={pinata}></Image>
            </div>

            <div class="col">
              <Image fluid src={yoseff}></Image>
            </div>
            <div class="col">
              <Image fluid src={cyano2}></Image>
            </div>
            <div class="col">
              <Image fluid src={art3}></Image>
            </div>

            <div class="col">
              <Image fluid src={art1}></Image>
            </div>
          </div>
        </div>
        <p className="my-3"></p>
      </Container>

      <Container
        className="p-4"
        fluid
        style={{ backgroundColor: "#0E5489", color: "white" }}
      >
        <div class="container text-left">
          <div class="row">
            <div class="col">
              <Image src={SYEPArt}></Image>
              <p className="my-3"></p>
              <h6 className="quando-regular">Art by Yosef Naranjo</h6>
            </div>

            <div class="col">
              {" "}
              <h4 className="quando-regular">Cyanotype Zine</h4>
              <p className="judson-regular">
                {" "}
                This summer’s Cyanotype zine was a collectively directed
                project. We looked at examples of zines and were inspired by
                members within our summer group that made their own zine.
                Ultimately, the group decided on an environmentally friendly art
                making process that wouldn’t produce more waste in its
                fabrication. Cyanotypes came forward because it relies on the
                environment to produce it - it relies on sun exposure for their
                images to transfer on to a fabric or paper. The materials we
                used were either in house or reused from Materials for the arts,
                except for our Cyanotype dye. The final images are related to
                some aspects of our environmental justice campaign sites,
                prompted by environmental awareness and advocacy within these
                sites.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Muralistas;
