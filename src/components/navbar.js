import React, { Component } from "react";

// import Logo from "../assets/logo.png";
import {
  MDBNavbar,
  // MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,

  // MDBIcon,
} from "mdbreact";

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
    // const { activePath } = appContext
    return (
      <MDBNavbar
        className="nav-z-index"
        color="unique-color-dark"
        dark
        expand="md"
      >
        {/* <MDBNavbarBrand>
            <strong>
              <img src={Logo} alt="blue mr logo png"></img>
            </strong>
          </MDBNavbarBrand> */}
        <MDBNavbarToggler onClick={this.toggleMenu} />
        <MDBCollapse
          className={"collapse navbar-collapse " + show}
          id="navbarCollapse3"
          isOpen={this.state.isOpen}
          navbar
        >
          <MDBNavbarNav center>
            {/* https://mdbootstrap.com/support/react/how-to-change-mdnavbar-item-to-active-dynamically/ */}
            {/* add active highlight after setting up context by putting active={activePath === "/home"} in the following <MDBNavItem> tag*/}
            <MDBNavItem>
              <MDBNavLink to="/">Home</MDBNavLink>
            </MDBNavItem>
            {/* add active highlight after setting up context by putting active={activePath === "/profile"} in the following <MDBNavItem> tag*/}
            <MDBNavItem>
              <MDBNavLink to="/profile">Profile</MDBNavLink>
            </MDBNavItem>
            {/* add active highlight after setting up context by putting active={activePath === "/portfolio"} in the following <MDBNavItem> tag*/}
            <MDBNavItem>
              <MDBNavLink to="/portfolio">Portfolio</MDBNavLink>
            </MDBNavItem>
            {/* add active highlight after setting up context by putting active={activePath === "/contact"} in the following <MDBNavItem> tag*/}
            <MDBNavItem>
              <MDBNavLink to="/contact">Contact</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default Navbar;
