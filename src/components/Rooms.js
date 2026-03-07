import React from "react";

// Import local images
import room1 from "../images/room1.jpg";
import room2 from "../images/room2.jpg";
import room3 from "../images/room3.jpg";

function Rooms() {
  return (
    <section id="rooms" className="py-5 bg-light">
      <div className="container">

        <h2 className="text-center mb-5">Our Rooms</h2>

        <div className="row">

          {/* Deluxe Room */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow">
              <img
                src={room1}
                className="card-img-top"
                alt="Deluxe Room"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Deluxe Room</h5>
                <p className="card-text">
                  Spacious room with sea view and modern amenities.
                </p>
              </div>
            </div>
          </div>

          {/* Executive Suite */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow">
              <img
                src={room2}
                className="card-img-top"
                alt="Executive Suite"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Executive Suite</h5>
                <p className="card-text">
                  Luxury suite with premium services and beautiful interior.
                </p>
              </div>
            </div>
          </div>

          {/* Presidential Suite */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow">
              <img
                src={room3}
                className="card-img-top"
                alt="Presidential Suite"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Presidential Suite</h5>
                <p className="card-text">
                  The most luxurious suite with premium comfort and services.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Rooms;