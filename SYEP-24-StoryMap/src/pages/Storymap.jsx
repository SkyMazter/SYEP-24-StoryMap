import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Col from "react-bootstrap/Col";

const Storymap = () => {
  return (
    <div>
      <Link to={"/"}>Go Home</Link>
      <Col className="justify-content-center d-flex">
        <h3>Air Quality</h3>
      </Col>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <h5>What is Air Quality? Who does it affect?</h5>
            Air quality is the degree to which the air is suitable and clean for
            humans, animals and the environment. Air that is free from toxic and
            harmful substances. Air quality affects everyone no matter how far
            or close you are near a pollution hotspot.
          </div>
          <div className="col">
          <p></p>
        </div>
        <div className="row">
          <div className="col">1 of 3</div>
          <div className="col"><h5>Why is Air Quality Important?</h5>Humans and the environment need air and breathe a lot of it, and breathing in such harsh conditions of air will only lead to health problems and a poor environment. Harmful air quality -causes certain symptoms such as irritation to the eyes, nose, throat and even shortness of breath. The more you are exposed to such harsh environments the more health problems you can or will possibly face in your future. Poor air quality can slowly deteriorate your physical and mental health if exposed constantly to it.</div>
          <div className="col">3 of 3</div>
      <Footer />
    </div>
    </div>
    </div>
    </div>
    );
};

export default Storymap;
