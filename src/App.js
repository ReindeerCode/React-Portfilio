import "./App.css";
import Navbar from "./components/navbar";
import Landing from "./pages/landingPage";
import Profile from "./pages/profilePage";
import Footer from "./components/footer";
import Portfolio from "./pages/portfolio";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route smooth={true} path="/" exact component={Landing} />
        <Route smooth={true} path="/profile" component={Profile} />
        <Route smooth={true} path="/portfolio" component={Portfolio} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
