import React from "react";
import Particles from "react-particles-js";
import WelcomeJumbotron from "../components/landingJumbotron";

const Landing = () => {
  return (
    <>
      <Particles
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
              },
            },
          },
        }}
      />
      <div className="landing-wrapper">
        <div className="container main-info">
          <WelcomeJumbotron />
        </div>
      </div>
    </>
  );
};

export default Landing;
