import React from "react";
import Card from "react-bootstrap/Card";


export default function Project(props) {
  return (
    <Card className="px-0 pe-0 mb-3 col-5 me-3">
      <Card.Header
       
        style={{ backgroundColor: "#264653", color: "#e9c46a" }}
      >
        <h4>{props.name}</h4>
      </Card.Header>
      <Card.Img src={props.src} alt={props.alt} />

      <Card.Footer>
        <Card.Link
          className="primary p-1 p-sm-2"
          href={props.deployed}
          style={{ color: "#264653" }}
        >
          Live App
        </Card.Link>

        <Card.Link
          className="secondary p-1 p-sm-2"
          href={props.git}
          style={{ color: "#264653" }}
        >
          GitHub Repo
        </Card.Link>
      </Card.Footer>
    </Card>
  );
}
