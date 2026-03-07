import React from "react";

function Booking() {
  return (
    <div className="container py-5">
      <h2>Booking Page</h2>
      <p>Users can book rooms here.</p>
      <form className="w-50 mx-auto">
        <input type="text" className="form-control mb-3" placeholder="Your Name" />
        <input type="email" className="form-control mb-3" placeholder="Your Email" />
        <select className="form-control mb-3">
          <option>Deluxe Room</option>
          <option>Executive Suite</option>
          <option>Presidential Suite</option>
        </select>
        <button className="btn btn-warning w-100">Book Now</button>
      </form>
    </div>
  );
}

export default Booking;