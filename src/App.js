import React, { useState } from "react";
import Header from "./components/Header";
import AboutMe from "./components/pages/AboutMe";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio";
import Resume from "./components/pages/Resume";
import Footer from "./components/Footer";

export default function App() {
  const [currentPage, setCurrentPage] = useState("About Me");

  const renderPage = () => {
    // return the corresponding component depending on the value of currentPage
    if (currentPage === "About Me") {
      return <AboutMe />;
    }

    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div>
      <body className="d-flex flex-column min-vh-100">
        <Header currentPage={currentPage} handlePageChange={handlePageChange} />
        <div className="wrapper flex-grow-1"> {renderPage()} </div>
        <div>
          <Footer />
        </div>
      </body>
    </div>
  );
}
