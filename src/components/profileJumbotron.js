import React from "react";
import Headshot from "../assets/Headshot.png";
import {
  MDBCardHeader,
  MDBJumbotron,
  MDBContainer,
  MDBTable,
  MDBTableBody,
} from "mdbreact";

const ProfileJumbotron = () => {
  return (
    <MDBJumbotron fluid className="transparent">
      <MDBContainer>
        <MDBCardHeader color="unique-color-dark" tag="h3">
          <img
            className="headShot align-middle"
            src={Headshot}
            alt="my headshot"
          />
        </MDBCardHeader>
        <h1 className="display-1">Profile</h1>
        <p>
          I don't think in a way that allows for building things with my hands -
          no woodworking or arts and crafts for me. I love programming because
          it gives me a creative outlet for how I think.
        </p>
      </MDBContainer>
      <MDBContainer>
        <p className="text-center">
          Technologies I've used to build modern websites:
        </p>
        <MDBTable small responsive>
          <MDBTableBody>
            <tr className="text-center">
              <td>MongoDB</td>
              <td>Express.JS</td>
              <td>React.JS</td>
              <td>Node.JS</td>
            </tr>
            <tr className="text-center">
              <td>HTML</td>
              <td>XML</td>
              <td>CSS</td>
              <td>Bootstrap</td>
            </tr>
            <tr className="text-center">
              <td>MDBootstrap</td>
              <td>UI/UX Design</td>
              <td>JavaScript</td>
              <td>jQuery</td>
            </tr>
            <tr className="text-center">
              <td>JSON</td>
              <td>API</td>
              <td>MySQL</td>
              <td>NPM</td>
            </tr>
          </MDBTableBody>
        </MDBTable>
      </MDBContainer>
    </MDBJumbotron>
  );
};

export default ProfileJumbotron;
