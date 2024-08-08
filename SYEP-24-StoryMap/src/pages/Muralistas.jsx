import NavBar from "../components/NavBar"
import Placeholder from "../assets/placeholder.png";
import airscale from "../assets/air scale.webp";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/Col";
const Muralistas = () => {
  return (
    <div>
        <NavBar></NavBar>  
       
        <div id="carouselExampleCaptions" class fluid="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <Image fluid src={airscale}></Image>
      <div class=" d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <Image fluid src={airscale}></Image>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <Image fluid src={airscale}></Image>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<Container className="p-3">
<div class="container text-center">
  <div class="row">
    <div class="col">
      Title
    </div>
    <div class="col">
      About the artists
    </div>
  </div>
</div>
</Container>

<Container className="p-3">
<div class="container text-center">
  <div class="row">
    <div class="col">
    <Image src={Placeholder} id="airscale"></Image>
    </div>
    <div class="col">
    <Image src={Placeholder} id="airscale"></Image>
    </div>
    <div class="col">
    <Image src={Placeholder} id="airscale"></Image>
    </div>

  </div>
</div>
</Container>

    </div>
  )
}

export default Muralistas
