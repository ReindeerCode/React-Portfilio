import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBTable, MDBTableBody } from "mdbreact";

import Headshot from "../assets/Headshot.png";

const ProfilePage = () => {
  return (
    <>
      <div className="profile-wrapper">
        <MDBContainer id="profile">
          <MDBRow>
            <MDBCol className="col-lg-6 col-sm-12">
              <img className="headShot " src={Headshot} alt="my headshot" />
            </MDBCol>
            <MDBCol>
              <h1 className="display-1">Profile</h1>
              <p style={{ wordSpacing: ".0.25em" }}>
                What you need to know is that I love hiking and dogs. Also, for
                almost a decade I worked in manufacturing sales and project
                management. About a year ago I decided to move on and find
                something new, but what, I didn't know. I knew I still wanted to
                work with people and be creative - I was surprised when
                programming kept coming up during my Google career searches.
              </p>
              <p style={{ wordSpacing: ".0.25em" }}>
                At first I thought a programmer sat in a dark room alone to work
                - I was surprised how important teamwork is to being a
                successful programmer. I was also surprised at how creative a
                programmer can be. I learned that it isn't all black and white,
                and that with programming, you can create almost anything you
                can think of.
              </p>
              <p style={{ wordSpacing: ".0.25em" }}>
                The more I read, the more interested I became. After researching
                schools, I decided UNH was the place for me and I haven't
                regretted it once since writing my first line of code, "HELLO
                WORLD!"
              </p>
            </MDBCol>
          </MDBRow>
          <MDBRow id="techTable">
            <MDBContainer>
              <h4>Technologies I've used to build modern websites:</h4>
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
          </MDBRow>
        </MDBContainer>
      </div>
    </>
  );
};

export default ProfilePage;
