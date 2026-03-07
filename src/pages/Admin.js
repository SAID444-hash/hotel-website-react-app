import React from "react";

function Admin() {
  return (
    <div className="container py-5">
      <h2>Admin Dashboard</h2>
      <p>Manage rooms, bookings, and users here.</p>

      {/* Example admin table */}
      <table className="table table-striped mt-4">
        <thead>
          <tr>
            <th>Room Name</th>
            <th>Status</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Deluxe Room</td>
            <td>Available</td>
            <td>$120</td>
            <td><button className="btn btn-sm btn-primary">Edit</button></td>
          </tr>
          <tr>
            <td>Executive Suite</td>
            <td>Booked</td>
            <td>$200</td>
            <td><button className="btn btn-sm btn-primary">Edit</button></td>
          </tr>
          <tr>
            <td>Presidential Suite</td>
            <td>Available</td>
            <td>$350</td>
            <td><button className="btn btn-sm btn-primary">Edit</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Admin;