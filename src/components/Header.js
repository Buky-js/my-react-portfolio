import React from "react";
import Navigation from "./Navigation";

export default function Header({ currentPage, handlePageChange }) {
  return (
    <div>
  <nav className="navbar navbar-expand-sm navbar-light" style={{backgroundColor: '#264653'}}>
    <div className="container-fluid">
      <h2 className="navbar-brand" style={{color: 'white', fontSize: '25px'}}>Olubukola Abiona</h2>
      
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
    </div>
  </nav>
    </div>
  
  );
}
