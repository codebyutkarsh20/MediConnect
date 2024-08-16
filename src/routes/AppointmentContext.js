// src/routes/AppointmentContext.js
import React, { createContext, useState, useContext } from "react";

// Create a context
const AppointmentContext = createContext();

// Create a provider component
export const AppointmentProvider = ({ children }) => {
  const [appointments, setAppointments] = useState([]);

  const addAppointment = (appointment) => {
    setAppointments((prevAppointments) => [...prevAppointments, appointment]);
  };

  return (
    <AppointmentContext.Provider value={{ appointments, addAppointment }}>
      {children}
    </AppointmentContext.Provider>
  );
};

// Custom hook to use the AppointmentContext
export const useAppointments = () => {
  return useContext(AppointmentContext);
};
