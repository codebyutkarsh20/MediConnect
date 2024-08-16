// src/components/ProfilePage.js
import React, { useContext } from "react";
import { AuthContext } from "../auth/Auth";
import "./routes.css";

const ProfilePage = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src={user?.avatar || "default-avatar.png"} alt="Profile Avatar" className="profile-avatar" />
        <h2>{user?.name || "Guest User"}</h2>
        <p>{user?.email || "No email available"}</p>
      </div>
      <div className="profile-details">
        <h3>About Me</h3>
        <p>{user?.bio || "No bio available"}</p>
      </div>
    </div>
  );
};

export default ProfilePage;

