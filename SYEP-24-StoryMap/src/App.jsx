import "./App.css";
import Button from "react-bootstrap/Button";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import BreadcrumbItem from "react-bootstrap/esm/BreadcrumbItem";
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import CardBody from "react-bootstrap/esm/CardBody";
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import Spinner from 'react-bootstrap/Spinner';

function App() {
  return (
    <>
      <div>
        <h1>This i</h1>
        <p>This is a paragraph</p>
        <button>this is a button</button>
        <Button>Click me</Button>
      </div>
        <Button variant="Link">Storymap</Button>
        <ListGroup as="ul">
      <ListGroup.Item as="li" active>Zines
      </ListGroup.Item>
      <ListGroup.Item as="li">PSA Videos</ListGroup.Item>
      <ListGroup.Item as="li" disabled> Climate Change
      </ListGroup.Item>
      <ListGroup.Item as="li">Air Quality</ListGroup.Item>
    </ListGroup>
    <Spinner animation="grow" variant="primary" />
    </
  )
}

export default App;