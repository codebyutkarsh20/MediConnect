// src/components/MakeProfile.js
import React, { useState, useContext, createContext } from "react";
import { AuthContext } from "../auth/Auth";
import { useNavigate } from "react-router-dom";
import "./routes.css";


const MakeProfile = () => {
  const { setUser } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [avatar, setAvatar] = useState(null);
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  


  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { name, email, bio, avatar,password };
    setUser(newUser);
    navigate("/profile"); // Redirect to profile page
  };

  return (
    <div className="make-profile-container">
      <h2>Create Your Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Bio</label>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Profile Picture</label>
          <input type="file" accept="image/*" onChange={handleAvatarChange} />
          {avatar && (
            <img src={avatar} alt="Avatar Preview" className="avatar-preview" />
          )}
        </div>
        <button type="submit">Create Profile</button>
      </form>
    </div>
  );
};

export default MakeProfile;
