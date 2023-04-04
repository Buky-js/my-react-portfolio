import React from "react";
import myResume from "../../utils/MyResume.pdf";
import { Container, Row, Col, Accordion, ListGroup } from "react-bootstrap";
import AccordionHeader from "react-bootstrap/esm/AccordionHeader";

const proficiencies = [
	{
		name: "Client-Side",
		skills: [
			"HTML5",
            "React",
			"Bootstrap",
			"CSS",
			"JavaScript",
			"Responsive Design"
		]
	}, {
		name: "Server-Side",
		skills: [
			"NodeJS",
			"Express",
			"Session Storage",
			"npm"
		]
	}, {
		name: "Database Skills",
		skills: [
			"MySQL",
			"Sequelize",
			"NoSQL",
			"SQLite",
			"GraphQL",
			"MongoDB",
			"Mongoose"
		]
	},
];
export default function Resume() {
  return (
    <div>
    
      
      <div>
      <Container>
				<Row>
					<Col>
					<div className="jumbotron jumbotron-fluid">
						<Container>
							<h1 className="display-4 text-center">Resume</h1>
						</Container>
					</div>
					</Col>
				</Row>
				<Row>
					<Col className="text-center mb-3">
                    <a
            className="btn btn-primary"
			style={{backgroundColor: '#264653'}}
            role="button"
            href={myResume}
            download="Olubukola_Abiona_Resume"
          >
            Download
          </a>
						
					</Col>
				</Row>
				<Row>
					<Col>
						<Accordion>
							{proficiencies.map((skillCategory, evtKey) => {
								return(
								<Accordion.Item eventKey={evtKey}>
									<AccordionHeader>{skillCategory.name}</AccordionHeader>
									<Accordion.Body>
									<ListGroup>
										{skillCategory.skills.map((skill) => {
											return (
											<ListGroup.Item>{skill}</ListGroup.Item>
											);
										})}
									</ListGroup>
									</Accordion.Body>
								</Accordion.Item>)
							})}
						</Accordion>
					</Col>
				</Row>
			</Container>
      </div>
    </div>
  );
}
