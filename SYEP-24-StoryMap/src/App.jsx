import "./App.css";
import Accordion from "react-bootstrap/Accordion" 
import Table from "react-bootstrap/Table"
import Image from 'react-bootstrap/Image'
import AccordionHeader from "react-bootstrap/esm/AccordionHeader";
function App(){
  return(
    <div>
<h1>Air Quality</h1>
    <p></p>
    <h4>Details on Air Quality / Pollution </h4>
<Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
   <AccordionHeader>What is Air Quality? Who does it affect?</AccordionHeader>
    <Accordion.Body>
    Air quality is the degree to which the air is suitable and clean for humans, animals and the environment. Air that is free from toxic and harmful substances. Air quality affects everyone no matter how far or close you are near a pollution hotspot. 
     </Accordion.Body>
      </Accordion.Item>
       <Accordion.Item eventKey="1">
      <Accordion.Header>Why is Air Quality Important? </Accordion.Header>
     <Accordion.Body>
    Humans and the environment need air and breathe a lot of it, and breathing in such harsh conditions of air will only lead to health problems and a poor environment. Harmful air quality -causes certain symptoms such as irritation to the eyes, nose, throat and even shortness of breath. The more you are exposed to such harsh environments the more health problems you can or will possibly face in your future. Poor air quality can slowly deteriorate your physical and mental health if exposed constantly to it. 
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
<p></p>
<p></p>
<h5>
         Air Quality Scale 
  </h5>
  <Table striped>
      <thead>
        <tr>
          <th>Good</th>
          <th>Moderate</th>
          <th>Unhealthy</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>0-49</td>
          <td>50-100</td>
          <td>101-150</td>
        </tr>
        <tr>
        </tr>
      </tbody>
    </Table>
 <p></p>

    <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
      <h5>Air Quality in Williamsburg</h5>
      <Accordion.Body>
Williamsburg, NY Air Quality forecast has been extremely poor and has a consistent air quality of around the 60s which is moderate for breathing and is significantly lower than good air which is anything above 50. Currently the community of Williamsburg has been taking in decent levels of nitrogen dioxide which then harms them and increases issues such as respiratory problems and more. People of williamsburg are most likely taking in as much nitrogen dioxide than oxygen. 
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    <h5>Air Quality and the BQE</h5>
  </div>
  )
}

export default App;
