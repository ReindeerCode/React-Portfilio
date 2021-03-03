import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import employee_direct from "../assets/employee_direct.png";
import budget_dashboard from "../assets/budget_dashboard.png";
import workout_dashboard from "../assets/workout_dashboard.png";
import hydro_reviews from "../assets/hydro_reviews.png";
import note_taker from "../assets/note_taker.png";
import weather_dashboard from "../assets/weather_dashboard.png";
import { MDBRow, MDBCol, MDBContainer, button } from "mdbreact";

const openSiteNewTab = (url) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};

const PortfolioCarousel = () => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={7000}
    >
      <>
        <MDBContainer>
          <MDBRow>
            <MDBCol md="6">
              <button
                onClick={() =>
                  openSiteNewTab(
                    "https://new-react-employee-directory.herokuapp.com/"
                  )
                }
                className="btn-main-offer contact-btn1 btn btn-outline-warning mt-5"
                type="submit"
              >
                Deployed Site
              </button>
            </MDBCol>

            <MDBCol md="6">
              <button
                onClick={() =>
                  openSiteNewTab(
                    "https://github.com/ReindeerCode/React-Employee-Directory"
                  )
                }
                className="btn-main-offer contact-btn1 btn btn-outline-warning mt-5"
                type="submit"
              >
                GitHub Repo
              </button>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <img src={employee_direct} alt="employee directory home page" />
        <div className="myCarousel">
          <h3>React Employee Directory</h3>
          <p>
            An employee directory made with React. Breaks up the application's
            UI into components, manages component state, and responds to user
            events.
          </p>
        </div>
      </>

      <>
        <MDBContainer>
          <MDBRow>
            <MDBCol md="6">
              <button
                onClick={() =>
                  openSiteNewTab(
                    "https://pwa-budget-tracker-indexed.herokuapp.com/"
                  )
                }
                className="btn-main-offer contact-btn1 btn btn-outline-warning mt-5"
                type="submit"
              >
                Deployed Site
              </button>
            </MDBCol>

            <MDBCol md="6">
              <button
                onClick={() =>
                  openSiteNewTab(
                    "https://github.com/ReindeerCode/PWA-Online-Offline-Budget-Tracker"
                  )
                }
                className="btn-main-offer contact-btn1 btn btn-outline-warning mt-5"
                type="submit"
              >
                GitHub Repo
              </button>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <img src={budget_dashboard} alt="budget dashboard page" />
        <div className="myCarousel">
          <h3>Progressive Web App Budget Tracker</h3>
          <p>
            PWA budget tracker - works to track cash inflow and outflow both
            online and off.
          </p>
        </div>
      </>

      <>
        <MDBContainer>
          <MDBRow>
            <MDBCol md="6">
              <button
                onClick={() =>
                  openSiteNewTab(
                    "https://fit-workout-tracker.herokuapp.com/stats"
                  )
                }
                className="btn-main-offer contact-btn1 btn btn-outline-warning mt-5"
                type="submit"
              >
                Deployed Site
              </button>
            </MDBCol>

            <MDBCol md="6">
              <button
                onClick={() =>
                  openSiteNewTab(
                    "https://github.com/ReindeerCode/Workout-Tracker"
                  )
                }
                className="btn-main-offer contact-btn1 btn btn-outline-warning mt-5"
                type="submit"
              >
                GitHub Repo
              </button>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <img src={workout_dashboard} alt="workout dashboard page" />
        <div className="myCarousel">
          <h3>Mongo and Mongoose Workout Tracker</h3>
          <p>
            Workout tracker that allows users to track the name, type, weight,
            sets, reps, and duration of exercise.
          </p>
        </div>
      </>
      <>
        <MDBContainer>
          <MDBRow>
            <MDBCol md="6">
              <button
                onClick={() =>
                  openSiteNewTab(
                    "https://hydro-homies.herokuapp.com/index.html"
                  )
                }
                className="btn-main-offer contact-btn1 btn btn-outline-warning mt-5"
                type="submit"
              >
                Deployed Site
              </button>
            </MDBCol>

            <MDBCol md="6">
              <button
                onClick={() =>
                  openSiteNewTab("https://github.com/ReindeerCode/hydrohomies")
                }
                className="btn-main-offer contact-btn1 btn btn-outline-warning mt-5"
                type="submit"
              >
                GitHub Repo
              </button>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <img src={hydro_reviews} alt="hydro homies reviews page" />
        <div className="myCarousel">
          <h3>Team project - Hydrohomies</h3>
          <p>
            Love drinking liquids? Why not let other people know what you like
            and don't like about different brands of things you've gulped down?
            As a team of 5 we developed this Twitter-like website that uses AJAX
            requests, MDBootstrap, and jQuery.
          </p>
        </div>
      </>
      <>
        <MDBContainer>
          <MDBRow>
            <MDBCol md="6">
              <button
                onClick={() =>
                  openSiteNewTab(
                    "https://new-express-note-taker.herokuapp.com/"
                  )
                }
                className="btn-main-offer contact-btn1 btn btn-outline-warning mt-5"
                type="submit"
              >
                Deployed Site
              </button>
            </MDBCol>

            <MDBCol md="6">
              <button
                onClick={() =>
                  openSiteNewTab(
                    "https://github.com/ReindeerCode/Express-Note-Taker"
                  )
                }
                className="btn-main-offer contact-btn1 btn btn-outline-warning mt-5"
                type="submit"
              >
                GitHub Repo
              </button>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <img src={note_taker} alt="express note taker home page" />
        <div className="myCarousel">
          <h3>Express Note Taker</h3>
          <p>
            An application that can be used to write, save, and delete notes.
            This application will use an express backend and save and retrieve
            note data from a JSON file.
          </p>
        </div>
      </>
      <>
        <MDBContainer>
          <MDBRow>
            <MDBCol md="6">
              <button
                onClick={() =>
                  openSiteNewTab(
                    "https://reindeercode.github.io/Server-Side-APIs-Weather-Dashboard/"
                  )
                }
                className="btn-main-offer contact-btn1 btn btn-outline-warning mt-5"
                type="submit"
              >
                Deployed Site
              </button>
            </MDBCol>

            <MDBCol md="6">
              <button
                onClick={() =>
                  openSiteNewTab(
                    "https://github.com/ReindeerCode/Server-Side-APIs-Weather-Dashboard"
                  )
                }
                className="btn-main-offer contact-btn1 btn btn-outline-warning mt-5"
                type="submit"
              >
                GitHub Repo
              </button>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <img src={weather_dashboard} alt="weather dashboard home page" />
        <div className="myCarousel">
          <h3>Server-Side APIs Weather Dashboard</h3>
          <p>Weather website developed with openweathermap.org API</p>
        </div>
      </>
    </Carousel>
  );
};

export default PortfolioCarousel;
