import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../Projects/ProjectCards";
import Particle from "../Particle";
import travel from "../../Assets/International/travel.png";


function International() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          International <strong className="purple"> Mobility </strong>
        </h1>
        <p style={{ color: "white" }}>
        As a Moroccan student living and studying in France, I had the chance to discover different cultures and get to know and work with international students too, which is necessary in the field of computer science to work with people from different parts of the globe. That's why in addition to English, French and Arabic; I decided to choose Japanese language as my LV2 to strengthen my relations with new people
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={travel}
              isBlog={false}
              title=" Travel the world"
              description="I have the intent to visit all countries of the world and discover new things, and to be able to express with others differently. I haven't traveled yet to many countries, I have been in Morocco, France, Spain and Portugal, I really liked those experiences."           
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default International;
