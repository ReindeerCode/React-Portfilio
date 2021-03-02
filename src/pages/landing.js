import React from "react";
import Typed from "react-typed";
import ContactBTN from "../components/contactBTN";
import WelcomeJumbotron from "../components/welcomeJumbotron";

const Landing = () => {
  return (
    <div className="landing-wrapper">
      <div className="container main-info">
        <WelcomeJumbotron />
      </div>
    </div>
  );
};

export default Landing;
