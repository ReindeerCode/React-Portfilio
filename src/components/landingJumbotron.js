import React from "react";
import Typed from "react-typed";
import ContactBTN from "./contactBTN";
import { MDBJumbotron, MDBContainer } from "mdbreact";

const LandingJumbotron = () => {
  return (
    <MDBJumbotron fluid className="transparent">
      <MDBContainer>
        <h1 className="display-1">Welcome!</h1>

        <Typed
          className="typed-text"
          strings={[
            "Front End",
            "Back End",
            "Everything in between",
            "MERN Full Stack Developer",
          ]}
          typeSpeed={60}
          backSpeed={80}
          loop
        />
      </MDBContainer>
      <ContactBTN />
    </MDBJumbotron>
  );
};

export default LandingJumbotron;
