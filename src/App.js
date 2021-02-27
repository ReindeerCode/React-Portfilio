import React from "react";
import "./App.css";
// import ReactDOM from "react-dom";
import "fullpage.js/vendors/scrolloverflow";
import ReactFullpage from "@fullpage/react-fullpage";
import NavbarPage from "./components/navbar";
import FooterPage from "./components/footer";
import { Welcome } from "./components/welcome";
import { Bio } from "./components/bio";
import { Portfolio } from "./components/portfolio";
import { Contact } from "./components/contact";

function App() {
  let sections = [Welcome(), Bio(), Portfolio(), Contact()];
  return (
    <>
      <NavbarPage />
      <ReactFullpage
        render={({ state, index }) => (
          <div className="App" id="fullPage">
            {sections.map((section, index) => {
              console.log(Welcome);
              return (
                // *** when i change this div to a fragment the dom updates 4 times
                <div>
                  {/* // *** i want these to pull in dynamically from the sections variable */}
                  <Welcome /> <Bio /> <Portfolio /> <Contact />
                </div>
              );
            })}
          </div>
        )}
      />
      <FooterPage />
    </>
  );
}

export default App;
