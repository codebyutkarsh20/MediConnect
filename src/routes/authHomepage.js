import React from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { useContext } from "react";
import { AuthContext } from "../auth/Auth";
import "./routes.css"
import { useProfile } from "./ProfileContext";
import Dashboard from "./Dashboard";
import { Link } from "react-router-dom";



const AuthHomepage = () => {
  const { user, setloggedIn } = useContext(AuthContext);
  const { userProfile } = useProfile(); // Access profile data from context

  return (
    <div className="auth-homepage-container">
      <Sidebar>
        <Menu>
          <MenuItem className="iMg">
            <img src={user?.avatar} alt={"profile"} />
          </MenuItem>
          <MenuItem component={<Link to="/dashboard" />}>Dashboard</MenuItem>
          <MenuItem component={<Link to="routes/appointments" />}>My Appointments</MenuItem>
          <MenuItem component={<Link to="/history" />}>History/Invoices</MenuItem>
          <MenuItem component={<Link to="/profile" />}>Profile Settings</MenuItem>
          <MenuItem component={<Link to="/change-password" />}>Change Password</MenuItem>
          <div className="logout">
            <button onClick={() => { setloggedIn(false) }}>Logout</button>
          </div>
        </Menu>
      </Sidebar>
      <div className="auth-homepage-content">
        <h2><u><b>Welcome, {user?.name}</b></u></h2>
        {/* Display the Dashboard */}
        <Dashboard />
      </div>
    </div>
  );
};

export default AuthHomepage;