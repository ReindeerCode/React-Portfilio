import "./App.css";
import Navbar from "./components/navbar";
import Landing from "./pages/landing";
import Profile from "./pages/profile";
import Particles from "react-particles-js";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Particles
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
              },
            },
          },
        }}
      />
      <Navbar />
      <Landing />
      <Profile />
    </>
  );
}

export default App;
