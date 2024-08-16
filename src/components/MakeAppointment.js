// src/routes/MakeAppointment.js
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './MakeAppointment.css';
import { useAppointments } from '../routes/AppointmentContext';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const MakeAppointment = () => {
  const { doctorId } = useParams(); // Get the doctorId from the URL
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState(null); // Date is now an object
  const [time, setTime] = useState('');

  const { addAppointment } = useAppointments();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newAppointment = { 
      title, 
      date: date.toISOString().split('T')[0], // Convert date to a simple string format
      time, 
      description, 
      location, 
      doctorId 
    };
    
    // Save the appointment using the addAppointment function
    addAppointment(newAppointment);

    // Redirect to MyAppointments page after saving
    navigate('/my-appointments');
  };

  return (
    <div className="appointment-container">
      <h2>Make an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Date</label>
          <DatePicker
            selected={date}
            onChange={(date) => setDate(date)}
            dateFormat="yyyy-MM-dd"
            placeholderText="Select a date"
            required
          />
        </div>
        <div className="form-group">
          <label>Time</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
        <button type="submit">Create Appointment</button>
      </form>
    </div>
  );
};

export default MakeAppointment;
