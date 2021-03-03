import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <MDBFooter color="unique-color-dark" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Thanks for coming!</h5>
            <p>
              I am extremely excited to take the leap into programming and I
              love talking about it. Please feel free to reach out to me anytime
              through any of the these links.
            </p>
          </MDBCol>
          <MDBCol md="4">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled fontA-icons">
                <a href="https://github.com/ReindeerCode" target="_blank">
                  <FontAwesomeIcon
                    className="fontA-icons"
                    icon={faGithub}
                    size="4x"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/a-michael-rudolph/"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    className="fontA-icons"
                    icon={faLinkedin}
                    size="4x"
                  />
                </a>
                <a
                  href="https://www.facebook.com/michael.rudolph.3939/"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    className="fontA-icons"
                    icon={faFacebook}
                    size="4x"
                  />
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://github.com/ReindeerCode"> Michael Rudolph </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
