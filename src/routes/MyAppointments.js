// src/routes/MyAppointments.js
import React, { useContext } from 'react';
import { useAppointments } from './AppointmentContext';
import { AuthContext } from '../auth/Auth';
import './routes.css';

const doctors = [
  { id: 1, name: "Dr. John Smith", specialty: "Cardiology", email: "john.smith@example.com", phone: "123-456-7890" },
  { id: 2, name: "Dr. Emily Johnson", specialty: "Neurology", email: "emily.johnson@example.com", phone: "234-567-8901" },
  { id: 3, name: "Dr. Michael Brown", specialty: "Orthopedics", email: "michael.brown@example.com", phone: "345-678-9012" },
  { id: 4, name: "Dr. Sarah Davis", specialty: "Pediatrics", email: "sarah.davis@example.com", phone: "456-789-0123" }
];

const MyAppointments = () => {
  const { appointments } = useAppointments();
  const { user } = useContext(AuthContext);

  // Find doctor by ID
  const getDoctorInfo = (doctorId) => doctors.find((doc) => doc.id === doctorId);

  return (
    <div className="my-appointments-container">
      <h2>My Appointments</h2>
      {appointments.length === 0 ? (
        <p>No appointments found.</p>
      ) : (
        <div className="appointments-list">
          {appointments.map((appointment, index) => {
            const doctor = getDoctorInfo(appointment.doctorId);
            return (
              <div key={index} className="appointment-card">
                <h3>Appointment with {doctor ? doctor.name : "Unknown Doctor"}</h3>
                <p><strong>Date:</strong> {appointment.date}</p>
                <p><strong>Time:</strong> {appointment.time}</p>
                <p><strong>Title:</strong> {appointment.title}</p>
                <p><strong>Description:</strong> {appointment.description}</p>
                <p><strong>Location:</strong> {appointment.location}</p>
                {doctor && (
                  <div className="doctor-info">
                    <h4>Doctor Details:</h4>
                    <p><strong>Specialty:</strong> {doctor.specialty}</p>
                    <p><strong>Email:</strong> {doctor.email}</p>
                    <p><strong>Phone:</strong> {doctor.phone}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MyAppointments;
