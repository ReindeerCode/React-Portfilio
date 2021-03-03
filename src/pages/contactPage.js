import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ContactBTN from "../components/contactBTN";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import emailjs from "emailjs-com";

const Contact = () => {
  const serviceID = "service_ID";
  const templateID = "template_ID";
  const userID = "user_2uccGaibF99iCzhT6xdeW";

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceID, templateID, e.target, userID).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  return (
    <>
      <Navbar />
      <div className="contact">
        <div className="text-center">
          <h1 className="display-1">
            Contact Me{" "}
            <span className="typed-text">@ MJRudolph86@gmail.com</span>
          </h1>
          <p>
            or fill out the fancy form below and I'll get back to you as soon as
            possible.
          </p>
        </div>
        <MDBContainer className="container">
          <form onSubmit={sendEmail}>
            <MDBRow>
              <MDBCol md="6" xs="12">
                {/* Name Input */}
                <input
                  id="name"
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                />
                <div className="line"></div>
                {/* Phone Input */}
                <input
                  id="phone"
                  type="text"
                  className="form-control"
                  placeholder="Phone Number"
                  name="phone"
                />
                <div className="line"></div>
                {/* Email Input */}
                <input
                  id="email"
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                />
                <div className="line"></div>
                {/* Subject Input */}
                <input
                  id="subject"
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  name="subject"
                />
                <div className="line"></div>
              </MDBCol>
              <MDBCol md="6" xs="12">
                {/* Message Input */}
                <textarea
                  id="message"
                  rows="3"
                  type="text"
                  className="form-control"
                  placeholder="Message"
                  name="message"
                />
                <div className="line"></div>
              </MDBCol>
            </MDBRow>
            <MDBRow className="d-flex justify-content-center mt-5">
              <div>
                <ContactBTN />
              </div>
            </MDBRow>
          </form>
        </MDBContainer>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
