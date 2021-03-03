import "./App.css";
import Landing from "./pages/landingPage";
import Profile from "./pages/profilePage";

import Portfolio from "./pages/portfolioPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";

function App() {
  return (
    <Router>
      <Switch>
        <Route smooth={true} path="/" exact component={Landing} />
        <Route smooth={true} path="/profile" component={Profile} />
        <Route smooth={true} path="/portfolio" component={Portfolio} />
      </Switch>
    </Router>
  );
}

export default App;
