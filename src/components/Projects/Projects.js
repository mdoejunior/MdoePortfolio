import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bm from "../../Assets/Projects/bm.png";
import theopa from "../../Assets/Projects/codeEditor.png";
import deezer from "../../Assets/Projects/deezer.png";
import portfolio from "../../Assets/Projects/portfolio.png";
import eMakazi from "../../Assets/Projects/codeEditor.png";
import LandingPage from "../../Assets/Projects/LandingPage.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bm}
              isBlog={false}
              title="BM Telecomms Website"
              description="Highly Scalable Web Site Builted using PHP and MVC Laravel Architecture for Company Representation"
              ghLink="https://github.com/mdoejunior/"
              demoLink="https://www.bmtelecomms.co.tz/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Personal Portfolio"
              description="My personal portfolio built and Customized using React Js, thank to soumyat template  "
              ghLink="https://github.com/mdoejunior/portfolio"
              demoLink="/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={deezer}
              isBlog={false}
              title="Deezer Like App"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/mdoejunior/"
              demoLink="https://mdoetech-deezer-app.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LandingPage}
              isBlog={false}
              title="Landing Page"
              description="Landing Page Template built using React Js."
              ghLink="https://github.com/mdoejunior/"
              demoLink="https://landing-page-react-js-one.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={theopa}
              isBlog={false}
              title="Bio Links Site"
              description="Bio Link Site built using PHP where you can shorten url and create multiple bio link pages"
              ghLink="https://github.com/mdoejunior/"
              demoLink="https://theopafamily.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eMakazi}
              isBlog={false}
              title="eMakazi Site"
              description="eMakazi Site built using MERN Stack, but for some reason its confidential"
              ghLink="https://github.com/mdoejunior/"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
