import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Landing from "./pages/landing";
import Footer from "./components/footer";
import Particles from "react-particles-js";
function App() {
  return (
    <>
      <Particles
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: "circle",
            stroke: {
              width: 6,
            },
          },
        }}
      />
      <Navbar />
      <Landing />
    </>
  );
}

export default App;
