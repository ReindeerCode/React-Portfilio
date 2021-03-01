import React, { Component } from "react";
import Logo from "../assets/logo.png";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBIcon,
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";

class Narbar extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
  }

  toggleCollapse(argument_id_needed) {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <Router>
        <MDBNavbar
          className="justify-content-center"
          color="unique-color-dark"
          dark
          expand="md"
        >
          <MDBNavbarBrand>
            <strong>
              <img src={Logo} alt="blue mr logo png"></img>
            </strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav Right>
              <MDBNavItem active>
                <MDBNavLink to="#!">Home</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#!">Profile</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#!">Portfolio</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#!">Contact</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </Router>
    );
  }
}

export default Narbar;
