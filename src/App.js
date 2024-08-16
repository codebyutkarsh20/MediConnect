// src/App.js
import "./App.css";
import Navbar from "./components/Navbar";
import React, { useContext } from "react";
import Login from "./auth/login";
import HomePage from "./components/HomePage";
import AuthProvider, { AuthContext } from "./auth/Auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer";
import Appointment from "./routes/MyAppointments.js";
import AuthHomepage from "./routes/authHomepage.js";
import ProfilePage from "./routes/profile.js";
import CreateProfile from "./routes/createProfile.js";
import ChangePassword from "./routes/ChangePassword";
import PrivateRoute from "./routes/PrivateRoute.js";
import Profile from "./routes/profile.js";
import { ProfileProvider } from "./routes/ProfileContext";
import Dashboard from "./routes/Dashboard.js";
import MakeAppointment from './components/MakeAppointment';
import { AppointmentProvider } from './routes/AppointmentContext';
function App() {
  return (
    <AuthProvider>
      <AppointmentProvider>
      <ProfileProvider>
        <BrowserRouter>
          <Navbar />

          
           <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/auth/login" element={<Login handle={"login"} />} />
            <Route path="/auth/SignUp" element={<Login handle={"SignUp"} />} />
            <Route path="/pipsqueak/2" element={<PrivateRoute element={AuthHomepage} />} />
            <Route path="/profile" element={<PrivateRoute element={ProfilePage} />} />
            <Route path="/make-profile" element={<CreateProfile />} />
            <Route path="/routes/appointments" element={<Appointment />} />
            <Route path="/dashboard" element={<PrivateRoute element={Dashboard} />} />
            <Route path="/change-password" element={<PrivateRoute element={ChangePassword} />} />
            <Route path="/profile" element={<PrivateRoute element={Profile} />} />
            <Route path="/make-appointment" element={<PrivateRoute element={MakeAppointment} />} />
            <Route path="/make-appointment/:doctorId" element={<PrivateRoute element={MakeAppointment} />} />
            
          </Routes> 
          <Footer />
        </BrowserRouter>
      </ProfileProvider>
      </AppointmentProvider>
    </AuthProvider>
  );
}



export default App;
