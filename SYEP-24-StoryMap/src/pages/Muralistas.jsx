import NavBar from "../components/NavBar";
import Placeholder from "../assets/placeholder.png";
import airscale from "../assets/air scale.webp";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Placeholder2 from "../assets/blank.png";
const Muralistas = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Carousel fluid style={{ backgroundColor: "#83AEAE",color: "white" }}>
        <Carousel.Item>
          {" "}
          <Image fluid className="muralistaimage" src={Placeholder2}></Image>
          <Carousel.Caption>The first image</Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          {" "}
          <Image fluid className="muralistaimage" src={Placeholder2}></Image>
          <Carousel.Caption >The second image</Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          {" "}
          <Image fluid className="muralistaimage" src={Placeholder2}></Image>
          <Carousel.Caption>The third image</Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container className="p-3" fluid style={{ backgroundColor: "#83AEAE",color: "white" }}>
        <div class="container text-center">
          <div class="row">
            <div class="col">Muralistas art group (Filler)</div>
            <div class="col">About the artists...</div>
            <p className="my-4"></p>
          </div>
        </div>
      </Container>

      <Container className="p-3" fluid style={{ backgroundColor: "#036D6F",color: "white" }}>
        <div class fluid="container text-center">
          <div class="row">
            <div class="col">
              <Image fluid className="placeholder" src={Placeholder}></Image>
            </div>

            <div class="col">
            <Image fluid className="placeholder" src={Placeholder}></Image>
            </div><div class="col">
            <Image fluid className="placeholder" src={Placeholder}></Image>
            </div>

            <div class="col">
            <p>desc...</p>

            </div>
          </div>
        </div>
        <p className="my-4"></p>
        <center>Gallery (Filler)</center>
      </Container>

      <Container className="p-3" fluid style={{ backgroundColor: "#036D6F" }}>
        <div class fluid="container text-center">
          <div class="row">
            <div class="col">
              <Image fluid className="placeholder" src={Placeholder}></Image>
            </div>

            <div class="col">
            <Image fluid className="placeholder" src={Placeholder}></Image>
            </div><div class="col">
            <Image fluid className="placeholder" src={Placeholder}></Image>
            </div><div class="col">
            <Image fluid className="placeholder" src={Placeholder}></Image>
            </div>

            <div class="col">
            <Image fluid className="placeholder" src={Placeholder}></Image>

            </div>
          </div>
        </div>
        </Container>
    </div>
  );
};

export default Muralistas;
