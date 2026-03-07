import React, { useState } from "react";
import { Link } from "react-router-dom";

function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    room: "",
    date: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", room: "", date: "" });
  };

  return (
    <div className="container mt-4">

      {/* Back to Home Button */}
      <Link to="/" className="btn btn-primary mb-3">
        ← Back to Home
      </Link>

      <h2>Book a Room</h2>

      {submitted && (
        <div className="alert alert-success">You have booked successfully!</div>
      )}

      <form onSubmit={handleSubmit} className="mt-3">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Room</label>
          <select
            className="form-select"
            name="room"
            value={formData.room}
            onChange={handleChange}
            required
          >
            <option value="">Select a room</option>
            <option value="presidential">Presidential Suite</option>
            <option value="deluxe">Deluxe Room</option>
            <option value="standard">Standard Room</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Date</label>
          <input
            type="date"
            className="form-control"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-warning">
          Book Now
        </button>
      </form>
    </div>
  );
}

export default Booking;