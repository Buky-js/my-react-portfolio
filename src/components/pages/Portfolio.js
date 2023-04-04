import React from "react";
import { Container, Row } from "react-bootstrap";
import Project from "../Project";
import projects from "../../assets/projects";

export default function Portfolio() {
  return (
    <div>
      <Container className="p-4 text-center">
        <Row>
   
            {projects.map((project) => (
              <Project
                key={project.id}
                name={project.name}
                src={project.src}
                alt={project.alt}
                git={project.git}
                deployed={project.deployed}
              />
            ))}
     
        </Row>
     
      </Container>
    </div>
  );
}

