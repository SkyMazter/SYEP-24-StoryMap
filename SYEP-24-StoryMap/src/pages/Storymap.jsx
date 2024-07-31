import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';

const Storymap = () => {
  return (
    <div>
      <Link to={"/"}>Go Home</Link>
      <h1>Reviving The BQE</h1>

      <Container className="p-3">
        <Row>
          <Col>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4}>
            <Figure>
              <Figure.Image
                width={500}
                height={100}
                alt="171x180"
                src="img"
                fluid
              />
              <Figure.Caption>Background of The BQE</Figure.Caption>
            </Figure>
          </Col>
          <Col xs={12} md={8}>
            {" "}
            <p>
              {" "}
              The Brooklyn-Queens Expressway is an 11.7 mile long expressway, extending from the Brooklyn-Battery Tunnel to the 
              Grand Central Parkway in Queens. Designed and planned by Robert Moses, the construction
             of the BQE lasted 27 years, beginning in 1937 and ending in 1964. Since then, the BQE has shaped New York City tremendously.
             With approximately 130,000 vehicles using the BQE daily,it’s evident that the passageway
             has become a staple in thousands of people’s daily lives. Whilst making people’s daily
              commutes more efficient, life for those beside the BQE hasn’t been made as easy.
              Air quality levels and city temperature’s double, 
              the loud & irritable noises from the highway boom throughout the streets, intersections
              and roadways become harder to cross. Year after year the communities that line the BQE become more
              dangerous, forcing people to suffer more and more. The BQE, overall, has become a huge hazard
             throughout these communities.
            </p>
          </Col>
        </Row>
      </Container>

      <div>
        
      </div>

      <div>
      <Container className="p-3">
        <Row>
          <Col>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={8}>
            {" "}
            <p>
              {" "}
              The Brooklyn-Queens Expressway is an 11.7 mile long expressway, extending from the Brooklyn-Battery Tunnel to the 
              Grand Central Parkway in Queens. Designed and planned by Robert Moses, the construction
             of the BQE lasted 27 years, beginning in 1937 and ending in 1964. Since then, the BQE has shaped New York City tremendously.
             With approximately 130,000 vehicles using the BQE daily,it’s evident that the passageway
             has become a staple in thousands of people’s daily lives. Whilst making people’s daily
              commutes more efficient, life for those beside the BQE hasn’t been made as easy.
              Air quality levels and city temperature’s double, 
              the loud & irritable noises from the highway boom throughout the streets, intersections
              and roadways become harder to cross. Year after year the communities that line the BQE become more
              dangerous, forcing people to suffer more and more. The BQE, overall, has become a huge hazard
             throughout these communities.
            </p>
          </Col>
        </Row>
      </Container>
      </div>
      <Footer />
    </div>
  )
}

export default Storymap