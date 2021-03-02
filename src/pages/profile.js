import React from "react";
// import ProfileCard from "../components/profile";
import ProfileJumbotron from "../components/profileJumbotron";

import BasicTable from "../components/table";

const Profile = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <ProfileJumbotron />
      </div>
    </div>
  );
};

export default Profile;
