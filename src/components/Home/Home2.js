import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillMail } from "react-icons/ai";
// import { AiFillGithub } from "react-icons/ai";
// import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with building things that solve real-world problems - especially in healthcare and e-learning - and I think I’ve picked up a few skills along the way… 😅
              <br />
              <br />I’m fluent in full-stack technologies like
              <i>
                <b className="purple"> JavaScript, TypeScript, Python, and Node.js</b> - and pretty comfortable working across both <b className="purple"> frontend</b> and <b className="purple"> backend systems. </b>
              </i>
              <br />
              <br />
              My field of interest includes crafting &nbsp;
              <i>
                <b className="purple">real-time platforms, healthcare-focused applications, </b> and
                <b className="purple">&nbsp;data-driven products</b>{" "}
                that actually make a difference.
              </i>
              <br />
              <br />
              Whenever I can, I bring my passion into building tools that are scalable, compliant, and genuinely useful - whether it’s with 
              <b className="purple"> Ruby, Rust,</b> or
              <i>
              &nbsp;a well-timed&nbsp;
                  <b className="purple">cron job.</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="mailto:brianchen30716@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://github.com/Abdelmouhaimen"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/Abdelmouhaimen"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
