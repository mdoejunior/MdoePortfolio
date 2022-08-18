import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Issa Ally Mdoe </span>
            from <span className="purple text-center"> Dar es Salaam, Tanzania.</span>
            <br />High-energy, Passionate, Solution Oriented and Problem  solver Software enginner with a  Bachelor Degree in Information System , Skilled in ReactJs, NodeJs, Firebase, APIs, Express,PHP, Python, JavaScript Frameworks. Team player with Excellent communication skills with proven ability to build and lead highly efficient teams to accomplish tasks.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Mooving 👌
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening Music 😍
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Feeds 😊
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">MdoeTech</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
