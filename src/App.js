import "./App.css";
import Landing from "./pages/landingPage";
import Profile from "./pages/profilePage";
import Portfolio from "./pages/portfolioPage";
import Contact from "./pages/contactPage";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/profile" component={Profile} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
