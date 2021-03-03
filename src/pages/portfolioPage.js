import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { MDBContainer } from "mdbreact";
import PortfolioCarousel from "../components/portfolioCarousel";

const Portfolio = () => {
  return (
    <>
      <Navbar />
      <div className="portfolio">
        <h1 className="display-1">My Projects</h1>
        <MDBContainer>
          <div className="portfolio-content"></div>
          <PortfolioCarousel />
        </MDBContainer>
      </div>
      <Footer />
    </>
  );
};

export default Portfolio;
