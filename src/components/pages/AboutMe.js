import React from "react";
import mypic from "../../assets/images/mypix2.png";
import { Container, Row, Col } from "react-bootstrap";
export default function AboutMe() {
  return (
    <div className="px-5 mt-3">
      <h1>About Me</h1>
      <Container className="pt-3 pb-3">
        <Row>
          <Col>
           
            <img src={mypic} alt="my face"></img>
          </Col>
          <Col>
            <div>
              I am a highly-motivated fullstack developer with a strong
              foundation in both front-end and back-end development. Over the
              years, I have perfected my web development and software testing
              skills. I have practical experience working with Javascript and
              Node.js and React framework. I also work comfortably with Oracle,
              MSSQL and MySQL databases.
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
