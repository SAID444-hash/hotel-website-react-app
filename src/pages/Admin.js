import React, { useState } from "react";
import { Link } from "react-router-dom";

function Admin() {
  const [adminData, setAdminData] = useState({
    username: "",
    password: "",
  });
  const [loggedIn, setLoggedIn] = useState(false);

  const handleChange = (e) => {
    setAdminData({ ...adminData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setLoggedIn(true);
    setAdminData({ username: "", password: "" });
  };

  return (
    <div className="container mt-4">

      {/* Back to Home Button */}
      <Link to="/" className="btn btn-primary mb-3">
        ← Back to Home
      </Link>

      <h2>Admin Login</h2>

      {loggedIn && (
        <div className="alert alert-success">You are logged in successfully!</div>
      )}

      <form onSubmit={handleLogin} className="mt-3">
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            name="username"
            value={adminData.username}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={adminData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-warning">
          Login
        </button>
      </form>
    </div>
  );
}

export default Admin;