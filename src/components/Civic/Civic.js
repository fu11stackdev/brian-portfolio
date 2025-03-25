import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../Projects/ProjectCards";
import Particle from "../Particle";
import sulitest from "../../Assets/Civic/sulitest.png";
import fresk from "../../Assets/Civic/fresk.png";
import entreup from "../../Assets/Civic/entreup.png";
import ideation from "../../Assets/Civic/ideation.png";


function Civic() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Environmental <strong className="purple"> Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Green actions are happening in this section ...
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ideation}
              isBlog={false}
              title="Act Now for Sustainable Development @N7 Ideation Day Winners"
              description="The N7 Ideation Day is an event where students come together to pitch their creative and innovative ideas for sustainable development. The event begins with a series of presentations, where students present their ideas to a panel of judges, highlighting the problem they are trying to solve, their proposed solution, and the potential impact of their project. During the event, the judging panel evaluates the projects based on various criteria such as feasibility, originality, and potential impact. The judges then select the top projects and these are put to a vote among the attendees. The project with the most votes is declared the winner of the ideation day. Our project, which is focused on reducing food waste in university canteens by collecting data on the most popular dishes and adjusting the portions accordingly, was voted as the winning project. The goal of our project is to decrease the amount of food waste generated in university canteens while also making sure that the meals offered are in line with the preferences of the students. Overall, the N7 Ideation Day was a great opportunity for students to showcase their innovative ideas and contribute to sustainable development. It was a challenging but rewarding experience that allowed us to work on a real-world problem and come up with a creative solution."           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={entreup}
              isBlog={false}
              title="Exploring Entrepreneurship: A Sensitization Day Experience"
              description="On November 8th, I participated in a Sensitization to Entrepreneurship day organized by my university. The goal of the day was to raise awareness about the steps involved in creating and developing a business, regardless of its legal structure. The event was organized in collaboration with PEPITE ECRIN, the organization that manages student entrepreneurship at the University of Toulouse. During the day, I worked in a group of 7 students to create a fictional business that addressed a problem or need that we had identified in advance. We were assisted by young alumni who have started their own businesses, as well as other people from the Toulouse ecosystem working in various business support structures. In the afternoon, we presented our business idea in a pitch competition and had the opportunity to receive feedback from experts in the field. The day was an engaging and informative experience that allowed me to learn about the process of creating a business and develop my teamwork, problem-solving, and presentation skills."           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sulitest}
              isBlog={false}
              title="Sulitest"
              description="The Sulitest is a tool that I used to assess my knowledge and understanding of sustainable development. The test consists of a series of questions and exercises that cover various aspects of sustainable development such as environmental protection, social justice, and economic growth. By taking the test, I was able to evaluate my understanding of the key issues and challenges related to sustainable development and identify areas where I needed to improve my knowledge. The test provided me with feedback on my performance and suggested resources for further learning. I found the Sulitest to be an engaging and informative experience that helped me to deepen my understanding of sustainable development and motivated me to learn more about this important topic."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fresk}
              isBlog={false}
              title="The Climate Fresk"
              description="The Climate Fresk is an innovative, effective and accessible tool for understanding the scientific bases of climate change. This game makes it possible to understand the main mechanisms at work in this eminently complex file, I found happiness in understanding, in working together, in deploying my creativity. All this without denying the seriousness of the situation or the urgency to act effectively, in solidarity and in an informed manner. To try it is to approve it !"
            />
          </Col>

          
          
    
        </Row>
      </Container>
    </Container>
  );
}

export default Civic;
