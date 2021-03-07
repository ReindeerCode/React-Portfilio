import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
// import Logo from "../assets/logo.png";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBBtn,

  // MDBIcon,
} from "mdbreact";

const openSiteNewTab = (url) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({ menu: !this.state.menu });
  }

  render() {
    const show = this.state.menu ? "show" : "";

    const scrollWithOffset = (el) => {
      const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
      const yOffset = -50;
      window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
    };

    return (
      <MDBNavbar
        className="nav-z-index sticky-top"
        color="unique-color-dark"
        dark
        expand="md"
      >
        <MDBNavbarToggler onClick={this.toggleMenu} />
        <MDBCollapse
          className={"collapse navbar-collapse " + show}
          id="navbarCollapse3"
          isOpen={this.state.isOpen}
          navbar
        >
          <MDBNavbarNav center>
            <MDBNavItem>
              <Link smooth={true} to="#top">
                <MDBBtn color="elegant" size="lg">
                  Home
                </MDBBtn>
              </Link>
            </MDBNavItem>

            <MDBNavItem>
              <Link
                smooth={true}
                to="#profile"
                scroll={(el) => scrollWithOffset(el)}
              >
                <MDBBtn color="elegant" size="lg">
                  Profile
                </MDBBtn>
              </Link>
            </MDBNavItem>

            <MDBNavItem>
              <Link
                smooth={true}
                to="#portfolio"
                scroll={(el) => scrollWithOffset(el)}
              >
                <MDBBtn color="elegant" size="lg">
                  Portfolio
                </MDBBtn>
              </Link>
            </MDBNavItem>

            <MDBNavItem>
              <Link
                smooth={true}
                to="#contact"
                scroll={(el) => scrollWithOffset(el)}
              >
                <MDBBtn color="elegant" size="lg">
                  Contact
                </MDBBtn>
              </Link>
            </MDBNavItem>
            <MDBNavItem>
              <Link
                onClick={() =>
                  openSiteNewTab(
                    "https://docs.google.com/document/d/1IQGl7PdqC_oVQId9BZWZoE9P7djlfTeX7GLcdvBoPGo/edit?usp=sharing"
                  )
                }
              >
                <MDBBtn color="elegant" size="lg">
                  Resume
                </MDBBtn>
              </Link>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default Navbar;
