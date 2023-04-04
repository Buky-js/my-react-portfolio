import React from "react";

export default function Navigation(props) {
  return (
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="nav nav-pills ms-auto">
        <li className="nav-item">
          <a
            href="#aboutme"
            onClick={() => props.handlePageChange("About Me")}
            className={
              props.currentPage === "About Me" ? "nav-link active" : "nav-link"
            }
            style={props.currentPage === "About Me" ? {backgroundColor: '#e9c46a'} : {color: 'white'} }
          >
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#portfolio"
            onClick={() => props.handlePageChange("Portfolio")}
            className={
              props.currentPage === "Portfolio" ? "nav-link active" : "nav-link"
            }
            style={props.currentPage === "Portfolio" ? {backgroundColor: '#e9c46a'} : {color: 'white'} }
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => props.handlePageChange("Contact")}
            className={
              props.currentPage === "Contact" ? "nav-link active" : "nav-link"
            }
            style={props.currentPage === "Contact" ? {backgroundColor: '#e9c46a'} : {color: 'white'} }
          >
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#resume"
            onClick={() => props.handlePageChange("Resume")}
            className={
              props.currentPage === "Resume" ? "nav-link active" : "nav-link"
            }
            style={props.currentPage === "Resume" ? {backgroundColor: '#e9c46a'} : {color: 'white'} }
            
          >
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
}
