import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Brian Chen </span>
            <br />I graduated as a Computer Science Engineer and have spent the last several years building impactful, real-world software across healthcare, clinical platforms, and e-learning. My passion lies in crafting full-stack solutions that are scalable, secure, and genuinely useful — especially in spaces where tech can truly improve people’s lives.

            <br/>
            I’m particularly interested in real-time systems, healthcare compliance (HIPAA/GCDMP), and building clean, developer-friendly tools. Curiosity, consistency, and product thinking fuel my journey as an engineer — and I’m always looking to grow, learn, and contribute to projects that matter.
            <br />
            <br />This portfolio aims to share not just what I’ve built, but also why I build. You’ll find snapshots of my experience, the problems I’ve tackled, and the outcomes I’ve helped create. Feel free to reach out if you’d like to connect or learn more!
            <br />
            <br />
            <br />Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning new tech just for fun
            </li>
          </ul>

          <p style={{ color: "rgb(96, 136, 224)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Brian Chen</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
