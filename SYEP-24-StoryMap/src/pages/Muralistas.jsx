import NavBar from "../components/NavBar";
import Placeholder from "../assets/placeholder.png";
import airscale from "../assets/air scale.webp";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Placeholder2 from "../assets/blank.png";
import SYEPArt from "../assets/syepart.jpg";
const Muralistas = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Carousel fluid style={{ backgroundColor: "#83AEAE", color: "white" }}>
        <Carousel.Item>
          {" "}
          <Image fluid className="muralistaimage" src={Placeholder2}></Image>
          <Carousel.Caption>The first image</Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          {" "}
          <Image fluid className="muralistaimage" src={Placeholder2}></Image>
          <Carousel.Caption>The second image</Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          {" "}
          <Image fluid className="muralistaimage" src={Placeholder2}></Image>
          <Carousel.Caption>The third image</Carousel.Caption>
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
              <h5 className="quando-regular">Muralistas Group 2024</h5>
            </div>
            <div class="col">
             <h5 className="judson-regular">The artists.. Yosef, Denise, Shaylie, and Pierre from El Puente</h5>
            </div>
          </div>
        </div>
      </Container>

      <Container
        className="p-2"
        fluid
        style={{ backgroundColor: "#0E5489", color: "white" }}
      ><p className="my-3"></p>
      
        <div class fluid="container text-center">
          <div class="row">
            <div class="col">
              <Image fluid src={Placeholder}></Image>
            </div>

            <div class="col">
              <Image fluid src={Placeholder}></Image>
            </div>
            <div class="col">
              <Image fluid src={Placeholder}></Image>
            </div>

            <div class="col">
              <p className="judson-regular">desc...</p>
            </div>
          </div>
        </div>
        <p className="my-3"></p>
        <center>
          <h5 className="quando-regular">Summer Art Gallery</h5>
        </center>
      </Container>

      <Container className="p-2" fluid style={{ backgroundColor: "#0E5489" }}>
        <div class fluid="container text-center">
          <div class="row">
            <div class="col">
              <Image fluid src={Placeholder}></Image>
            </div>

            <div class="col">
              <Image fluid src={Placeholder}></Image>
            </div>
            <div class="col">
              <Image fluid src={Placeholder}></Image>
            </div>
            <div class="col">
              <Image fluid src={Placeholder}></Image>
            </div>

            <div class="col">
              <Image fluid src={Placeholder}></Image>
            </div>
          </div>
        </div>
        <p className="my-3"></p>
      </Container>

      <Container
        className="p-3"
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
              <p className="judson-regular">Our Southside artists are a group of youth organizers at El Puente
              that came together to create fillerrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr</p>
            </div>
            </div>
            </div>
            </Container>
    </div>
  );
};
export default Muralistas;
