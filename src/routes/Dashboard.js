// src/components/Dashboard.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./routes.css"; // Ensure this file exists for styling

const doctors = [
  { id: 1, name: "Dr. John Smith", specialty: "Cardiology", email: "john.smith@example.com", phone: "123-456-7890" },
  { id: 2, name: "Dr. Emily Johnson", specialty: "Neurology", email: "emily.johnson@example.com", phone: "234-567-8901" },
  { id: 3, name: "Dr. Michael Brown", specialty: "Orthopedics", email: "michael.brown@example.com", phone: "345-678-9012" },
  { id: 2, name: "Dr. Emily Johnson", specialty: "Neurology", email: "emily.johnson@example.com", phone: "234-567-8901" },
  { id: 3, name: "Dr. Michael Brown", specialty: "Orthopedics", email: "michael.brown@example.com", phone: "345-678-9012" },
  { id: 4, name: "Dr. Sarah Davis", specialty: "Pediatrics", email: "sarah.davis@example.com", phone: "456-789-0123" }
];

const Dashboard = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const handleSelectDoctor = (doctor) => {
    setSelectedDoctor(doctor);
  };

  return (
    <div className="dashboard-container">
      <h2>Doctors Dashboard</h2>
      <div className="doctor-list">
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            className="doctor-card"
            onClick={() => handleSelectDoctor(doctor)}
          >
            <h3>{doctor.name}</h3>
            <p><strong>Specialty:</strong> {doctor.specialty}</p>
            <p><strong>Email:</strong> {doctor.email}</p>
            <p><strong>Phone:</strong> {doctor.phone}</p>
            <Link
              to={`/make-appointment/${doctor.id}`}
              className="make-appointment-link"
            >
              Make Appointment
            </Link>
          </div>
        ))}
      </div>
      {selectedDoctor && (
        <div className="selected-doctor">
          <h2>Selected Doctor</h2>
          <div className="doctor-details">
            <h3>{selectedDoctor.name}</h3>
            <p><strong>Specialty:</strong> {selectedDoctor.specialty}</p>
            <p><strong>Email:</strong> {selectedDoctor.email}</p>
            <p><strong>Phone:</strong> {selectedDoctor.phone}</p>
            <Link
              to={`/make-appointment/${selectedDoctor.id}`}
              className="make-appointment-link"
            >
              Make Appointment with {selectedDoctor.name}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
