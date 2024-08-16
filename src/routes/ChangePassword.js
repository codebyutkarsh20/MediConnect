// src/components/ChangePassword.js
import React, { useState, useContext } from "react";
import { AuthContext } from "../auth/Auth";
import { useNavigate } from "react-router-dom";
import "./routes.css";

const ChangePassword = () => {
  const { user, setUser } = useContext(AuthContext);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (newPassword !== confirmPassword) {
      alert("New passwords do not match!");
      return;
    }

    // Here you would typically handle password validation and updating logic
    // For demonstration, we'll just update the context
    const updatedUser = { ...user, password: newPassword };
    setUser(updatedUser);

    alert("Password updated successfully!");
    navigate("/profile"); // Redirect to profile page
  };

  return (
    <div className="change-password-container">
      <h2>Change Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Current Password</label>
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>New Password</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Confirm New Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Change Password</button>
      </form>
    </div>
  );
};

export default ChangePassword;

