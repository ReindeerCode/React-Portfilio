import "./App.css";
import Navbar from "./components/navbar";
import Landing from "./pages/landingPage";
import Profile from "./pages/profilePage";
import Footer from "./components/footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/profile" component={Profile} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
