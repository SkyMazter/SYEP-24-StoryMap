import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Storymap = () => {
  return (
    <div>
      <Link to={"/"}>Go Home</Link>
      <h1>Reviving The BQE</h1>
      <div className="d-flex justify-content-around">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="https://images.app.goo.gl/81XqrcrAuYSxBabf9" />
          <Card.Body>
            <Card.Title>The BQE</Card.Title>
            <Card.Text>
              The 11.7 mile long expressway, from the Brooklyn-Battery Tunnel to
              the Grand Central Parkway in Queens, was designed and planned by
              American Urban planner, Robert Moses. The BQE was built from
              1937-1964 and approximately 130,000 vehicles use the BQE daily –
              13,000 of them being trucks.
            </Card.Text>
            <Button variant="primary">More Info</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://images.app.goo.gl/hxpiHTag1ZWXZnsz5"
          />
          <Card.Body>
            <Card.Title>The BQE</Card.Title>
            <Card.Text>
              The 11.7 mile long expressway, from the Brooklyn-Battery Tunnel to
              the Grand Central Parkway in Queens, was designed and planned by
              American Urban planner, Robert Moses. The BQE was built from
              1937-1964 and approximately 130,000 vehicles use the BQE daily –
              13,000 of them being trucks.
            </Card.Text>
            <Button variant="primary">More Info</Button>
          </Card.Body>
        </Card>
      </div>
      <Footer />
    </div>
  )
}

export default Storymap
