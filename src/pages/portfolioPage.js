import React from "react";
import { MDBContainer } from "mdbreact";
import PortfolioCarousel from "../components/portfolioCarousel";

const Portfolio = () => {
  return (
    <>
      <div className="portfolio">
        <h1 className="display-1">My Projects</h1>
        <MDBContainer>
          <div className="portfolio-content"></div>
          <PortfolioCarousel />
        </MDBContainer>
      </div>
    </>
  );
};

export default Portfolio;
