import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import guru from "../../Assets/Projects/guru.png";
import att from "../../Assets/Projects/att.png";
import suicide from "../../Assets/Projects/suicide.png";
import Rest from "../../Assets/Projects/Rest.png";

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
              imgPath={att}
              isBlog={false}
              title="Attendance Management system using facial Recognition"
              description="The system maintains a quick and accurate record of the student/employee attendance and provides timely summaries and records whenever needed. Automation of the attendance system frees the authorities from mundane tasks and saves time. Face recognition algorithms can extract features from a face image namely positions of forehead, eyes, nose, mouth, chin, jaws."
              link="https://github.com/namanchitkara1/Face-recognition-system-in-attendance-managmet-system-"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Rest}
              isBlog={false}
              title="Restaurant website "
              description="The Website Consist of Menu ,chef details ,feedback form and the restaurant description & location 

              Also, comes with reserve table online feature "
              link="https://chitkaras.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={guru}
              isBlog={false}
              title="Theguruway.com"
              description=" OnlinecodeTheGuruway.com is An ERP solution provider in which Made the frontend part of the website using React.Js and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage
              -Internship project done at forklyft"
              link="https://theguruway.com"
            />
          </Col>

         
       
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
