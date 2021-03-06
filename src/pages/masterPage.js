import "../App.css";
import Landing from "./landingPage";
import ProfilePage from "./profilePage";
import Portfolio from "./portfolioPage";
import Contact from "./contactPage";

function Master() {
  return (
    <div>
      <Landing />
      <ProfilePage />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default Master;
