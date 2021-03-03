import React from "react";
import Particles from "react-particles-js";
import Typed from "react-typed";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

import { MDBContainer } from "mdbreact";

const openSiteNewTab = (url) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};

const Landing = () => {
  return (
    <>
      <Navbar />
      <Particles
        className="particles-canvas"
        id="landing"
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
          <button
            className="btn-main-offer contact-btn1 btn btn-outline-warning"
            type="submit"
            onClick={() => openSiteNewTab("https://github.com/ReindeerCode")}
          >
            github Projects
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Landing;
