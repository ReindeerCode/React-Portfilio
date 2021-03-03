import "./App.css";
import Landing from "./pages/landingPage";
import Profile from "./pages/profilePage";
import Portfolio from "./pages/portfolioPage";
import Contact from "./pages/contactPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route smooth={true} path="/" exact component={Landing} />
        <Route smooth={true} path="/profile" component={Profile} />
        <Route smooth={true} path="/portfolio" component={Portfolio} />
        <Route smooth={true} path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
