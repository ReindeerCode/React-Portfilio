import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HashLink as Link } from "react-router-hash-link";

import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const openSiteNewTab = (url) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};

const Footer = () => {
  return (
    <MDBFooter
      id="footer"
      color="unique-color-dark"
      className=" text-center sticky-bottom font-small pt-4 "
    >
      <MDBContainer fluid className="text-center ">
        <MDBRow className="d-flex justify-content-center">
          <MDBCol md="6">
            <h5 className="title">Thanks for coming!</h5>
            <p>
              I am extremely excited to take the leap into programming and I
              love talking about it. Please feel free to reach out to me anytime
              through any of these icon links.
            </p>
          </MDBCol>
          <MDBCol md="2" sm="4">
            <div className="list-unstyled fontA-icons">
              <Link
                onClick={() =>
                  openSiteNewTab("https://github.com/ReindeerCode")
                }
              >
                <FontAwesomeIcon
                  className="fontA-icons"
                  icon={faGithub}
                  size="4x"
                />
              </Link>
            </div>
          </MDBCol>
          <MDBCol md="2" sm="4">
            <div className="list-unstyled fontA-icons">
              <Link
                onClick={() =>
                  openSiteNewTab(
                    "https://www.linkedin.com/in/a-michael-rudolph/"
                  )
                }
              >
                <FontAwesomeIcon
                  className="fontA-icons"
                  icon={faLinkedin}
                  size="4x"
                />
              </Link>
            </div>
          </MDBCol>
          <MDBCol md="2" sm="4">
            <div className="list-unstyled fontA-icons">
              <Link
                onClick={() =>
                  openSiteNewTab(
                    "https://www.facebook.com/michael.rudolph.3939/"
                  )
                }
              >
                <FontAwesomeIcon
                  className="fontA-icons"
                  icon={faFacebook}
                  size="4x"
                />
              </Link>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <Link
            onClick={() =>
              openSiteNewTab("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
            }
          >
            {" "}
            Michael Rudolph{" "}
          </Link>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
