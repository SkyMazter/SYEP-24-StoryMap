import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";

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
    </div>
    );
};

export default Storymap;
